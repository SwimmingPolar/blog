import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR:wght@400;700&family=Sawarabi+Gothic&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="xyAmgKZFgAnyRJ1I-D6egceWDOj-68wwCQ8vKZspCEY"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
