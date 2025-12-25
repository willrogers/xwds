import { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout from "../components/layout";
import Table from "../components/table";
import {
  getAbbreviationsData as getAbbreviationsData,
  AbbreviationsData as AbbreviationsData,
} from "../lib/data";
import styles from "./abbreviations.module.css";

interface Props {
  abbreviationsData: AbbreviationsData[];
}

const AbbreviationsPage = ({ abbreviationsData: abbreviationsData }: Props) => {
  const [filterString, setFilterString] = useState<string>("");
  return (
    <>
      <Head>
        <title>Crossword Abbreviations</title>
      </Head>
      <Layout>
        <h1>Crossword abbreviations</h1>
        <p>
          Some abbreviations that are commonly used in crosswords, but are not
          obvious.
        </p>
        <div id={styles.tablecontainer}>
          <div id={styles.filter}>
            Search in table:
            <input
              type="text"
              value={filterString}
              onChange={(x) => setFilterString(x.target.value)}
            />
          </div>
          <Table
            abbreviationsData={abbreviationsData}
            filterString={filterString}
          />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const abbreviationsData = getAbbreviationsData();

  return { props: { abbreviationsData } };
};

export default AbbreviationsPage;
