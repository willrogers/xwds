import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout from "../src/components/layout";
import Table from "../src/components/table";
import { getBasicsData, BasicsData } from "../src/lib/data";

interface Props {
  basicsData: BasicsData[];
}

const BasicsPage = ({ basicsData }: Props): JSX.Element => (
  <>
    <Head>
      <title>Crossword Basics</title>
    </Head>
    <Layout>
      <h1>Crossword basics</h1>
      <p>Some things that help get started.</p>
      <Table basicsData={basicsData} />
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const basicsData = getBasicsData();

  return { props: { basicsData } };
};

export default BasicsPage;
