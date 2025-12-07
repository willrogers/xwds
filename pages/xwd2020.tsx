import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import CrosswordPage from "../src/components/crossword";
import { getXwdData, XwdData } from "../src/lib/data";

interface Props {
  xwdData: XwdData;
}

const Crossword2020 = ({ xwdData }: Props) => {
  return (
    <>
      <Head>
        <title>{xwdData.title}</title>
      </Head>
      <CrosswordPage
        title={xwdData.title}
        preamble={xwdData.preamble}
        year={2020}
        month={11}
        acrossSize={xwdData["across-size"]}
        downSize={xwdData["down-size"]}
        blackSquares={xwdData["black-squares"]}
        rawClues={xwdData.clues}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const xwdData = getXwdData("2020");

  return { props: { xwdData } };
};

export default Crossword2020;
