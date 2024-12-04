import React from "react";

import Layout from "../components/layout";
import Table from "../components/table";

const BasicsPage = (): JSX.Element => (
  <Layout>
    <h1>Crossword basics</h1>
    <p>Some things that help get started.</p>
    <Table></Table>
  </Layout>
);

export default BasicsPage;
