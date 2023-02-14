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
          content="A1r4Sqi5OONxnLT3NynLkjy3TbSG5KbNuGVdI72MLbg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
