import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      {/* <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap" rel="stylesheet" /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
