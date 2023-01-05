import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
