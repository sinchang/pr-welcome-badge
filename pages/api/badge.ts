import type { NextApiRequest, NextApiResponse } from 'next'
import uniqBy from 'lodash.uniqby'
import { Octokit } from '@octokit/rest'
const octokit = new Octokit({
  auth: process.env.GH_AUTH_TOKEN,
})

const DEFAULT_LABELS = [
  'help wanted',
  'good first issue',
  'pr welcome',
  'contribution welcome',
  'accepting prs',
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'GET') return res.status(401)

  const query = req.query as { labels: string[]; repo: string[] }

  const labels = Array.isArray(query.labels)
    ? query.labels
    : query.labels
    ? [query.labels]
    : DEFAULT_LABELS

  const repo = query.repo

  if (!repo)
    return res.status(400).json({ message: 'Please provide the GitHub Repo' })

  const itemSearchResults = await Promise.all(
    labels.map(async (label) => {
      const issues = await octokit.search.issuesAndPullRequests({
        q: `archived:false is:issue is:open sort:updated-desc label:"${label}" repo:"${repo}"`,
        per_page: 100,
      })

      return issues.data.items
    })
  )

  const labelQueryString = '+label:' + labels.map((label) => `"${label}",`)
  const issuesLink = `https://github.com/${repo}/issues?q=archived:false+is:issue+is:open+sort:updated-desc${labelQueryString}`
  const uniqItemSearchResults = uniqBy(itemSearchResults.flat(), 'url')

  res.status(200).json({
    schemaVersion: 1,
    label: 'PR Welcome',
    message: uniqItemSearchResults.length,
    color: 'success',
    issues: issuesLink,
  })
}
