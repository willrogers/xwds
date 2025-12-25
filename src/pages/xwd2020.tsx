import Head from "next/head";
import { GetStaticProps } from "next";

import CrosswordPage from "../components/crossword";
import { getXwdData, XwdData } from "../lib/data";

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
        startDate={xwdData["start-date"]}
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
