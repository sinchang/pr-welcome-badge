import '../styles/globals.css'
import '@geist-ui/style'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        data-website-id='ffede72a-c791-46bd-ab88-1c5f52d6dfa6'
        src='https://umami-production-af5b.up.railway.app/umami.js'
        strategy='afterInteractive'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
