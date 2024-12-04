import React from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = (): JSX.Element => (
  <Layout>
    <h1>Crosswords</h1>
    <ul>
      <li>
        <Link to="/basics/">Some help for new starters</Link>
      </li>
      <li>
        <Link to="/xwd2020/">The 2020 Advent Crossword</Link>
      </li>
      <li>
        <Link to="/xwd2024/">The 2024 Advent Crossword</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
