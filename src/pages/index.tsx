import React from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Crosswords</h1>
    <ul>
      <li>
        <Link to="/basics/">Some help for new starters</Link>
      </li>
      <li>
        <Link to="/xwd/">The 2020 Advent Crossword</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
