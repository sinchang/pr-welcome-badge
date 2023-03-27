import type { NextApiRequest, NextApiResponse } from 'next'
import uniqBy from 'lodash.uniqby'
import { Octokit } from '@octokit/rest'
const octokit = new Octokit({
  auth: process.env.GH_AUTH_TOKEN,
})

const DEFAULT_LABELS = ['help wanted', 'good first issue']

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'GET') return res.status(401)

  const query = req.query as { repo: string[] }
  const repo = query.repo

  if (!repo)
    return res.status(400).json({ message: 'Please provide the GitHub Repo' })

  const itemSearchResults = await Promise.all(
    DEFAULT_LABELS.map(async (label) => {
      const issues = await octokit.search.issuesAndPullRequests({
        q: `archived:false is:issue is:open sort:updated-desc label:"${label}" repo:"${repo.join(
          '/'
        )}"`,
        per_page: 100,
      })

      return issues.data.items
    })
  )

  const labelQueryString =
    '+label:' + DEFAULT_LABELS.map((label) => `"${label}"`)

    const q = `archived:false+is:issue+is:open+sort:updated-desc${labelQueryString}`
  const issuesUrl = `https://github.com/${repo.join(
    '/'
  )}/issues?$q=${encodeURIComponent(q)}`
  const uniqItemSearchResults = uniqBy(itemSearchResults.flat(), 'url')

  res.setHeader('Cache-Control', 's-maxage=3600')
  res.status(200).json({
    subject: 'PR Welcome',
    status: uniqItemSearchResults.length,
    color: 'green',
    issuesUrl,
  })
}
