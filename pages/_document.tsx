import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          data-website-id='ffede72a-c791-46bd-ab88-1c5f52d6dfa6'
          src='https://umami-production-af5b.up.railway.app/umami.js'
          strategy='afterInteractive'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
