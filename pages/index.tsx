import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import CodeCopy from 'react-codecopy'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [repo, setRepo] = useState('fastify/help')
  const [issuesUrl, setIssuesUrl] = useState('')

  const fetchRepoInfo = async (
    repoName: string
  ): Promise<{ issuesUrl: string }> => {
    return fetch(`https://pr-welcome-badge.vercel.app/api/badge/${repoName}`)
      .then((res) => res.json())
      .then((res) => res)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepo(e.currentTarget.value)
    setIssuesUrl('')
  }

  const handlePreview = async () => {
    const { issuesUrl } = await fetchRepoInfo(repo)

    setIssuesUrl(issuesUrl)
  }

  const md = `[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/${repo})](${encodeURIComponent(
    issuesUrl
  )})`

  return (
    <div className={styles.container}>
      <Head>
        <title>PR Welcome Badge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>PR Welcome Badge</h1>

        <div className={styles.form}>
          <input
            className='zi-input big search-input'
            placeholder='Repo...'
            value={repo}
            onChange={handleInputChange}
          ></input>
          <button
            className='zi-btn preview-btn'
            type='button'
            onClick={handlePreview}
          >
            Preview
          </button>
        </div>
        <div className=''>
          {!!issuesUrl && (
            <a href={issuesUrl}>
              <Image
                alt='badge'
                width={100}
                height={100}
                src={`https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/${repo}`}
              />
            </a>
          )}
        </div>
        {!!issuesUrl && (
          <CodeCopy text={md}>
            <div className={styles.code}>
              {md}
            </div>
          </CodeCopy>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/sinchang/pr-welcome-badge'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made with ❤️ for the Open Source Community by Jeff Wen
        </a>
      </footer>
    </div>
  )
}

export default Home
