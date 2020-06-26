import React from "react";

import Layout from "../components/layout";
import Table from "../components/table";
import SEO from "../components/seo";

const BasicsPage = (): JSX.Element => (
  <Layout>
    <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Crossword basics</h1>
    <p>Some things that help get started.</p>
    <Table></Table>
  </Layout>
);

export default BasicsPage;
