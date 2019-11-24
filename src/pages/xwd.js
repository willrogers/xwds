import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Crossword } from "../components/xwd";

const CrosswordPage = () => {
  const [blackSquares, setBlackSquares] = useState([]);
  const [acrossSize, setAcrossSize] = useState(0);
  const [downSize, setDownSize] = useState(0);
  const [clues, setClues] = useState({ ac: [], dn: [] });
  if (blackSquares.length === 0) {
    fetch("/xwd2019.json")
      .then(data => {
        console.log(data);
        return data.json();
      })
      .then(json => {
        setBlackSquares(json["black-squares"]);
        setAcrossSize(json["across-size"]);
        setDownSize(json["down-size"]);
        setClues(json["clues"]);
      });
  }
  console.log("props");
  console.log(clues["ac"]);
  console.log(blackSquares);
  console.log(acrossSize);
  console.log(downSize);
  return (
    <Layout>
      <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
      <Crossword
        blackCells={blackSquares}
        h={acrossSize}
        v={downSize}
        clues={clues}
      />
    </Layout>
  );
};

export default CrosswordPage;
