import React from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Crosswords</h1>
    <ul>
      <li><Link to="/xwd/">The Advent Crossword 2020</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
