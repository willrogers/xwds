import Head from "next/head";
import Link from "next/link";

import Layout from "../src/components/layout";

const IndexPage = () => (
  <>
    <Head>
      <title>Crosswords</title>
    </Head>
    <Layout>
      <h1>Crosswords</h1>
      <ul>
        <li>
          <Link href="/basics">Some help for new starters</Link>
        </li>
        <li>
          <Link href="/xwd2020">The 2020 Advent Crossword</Link>
        </li>
        <li>
          <Link href="/xwd2024">The 2024 Advent Crossword</Link>
        </li>
        <li>
          <Link href="/xwd2025">The 2025 Christmas Crossword</Link>
        </li>
      </ul>
    </Layout>
  </>
);

export default IndexPage;
