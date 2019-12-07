import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Crossword } from "../components/xwd";
import { Coord } from "../components/xwd_utils";

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
  const blackCells = blackSquares.map(([x, y]) => new Coord(x, y));
  return (
    <Layout>
      <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
      <Crossword
        blackCells={blackCells}
        h={acrossSize}
        v={downSize}
        clues={clues}
      />
    </Layout>
  );
};

export default CrosswordPage;
