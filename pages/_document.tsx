import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://wllrg.rs/css/style.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Mukta+Mahee%7CRaleway"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
