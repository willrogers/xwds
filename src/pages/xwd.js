import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, ClueBox } from "../components/xwd";

const CrosswordPage = () => {
  const [blackSquares, setBlackSquares] = useState([]);
  const [acrossSize, setAcrossSize] = useState(0);
  const [downSize, setDownSize] = useState(0);
  const [clues, setClues] = useState({ ac: [], dn: [] });
  if (blackSquares.length === 0) {
    fetch("/xwd2018.json")
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
  console.log("clues");
  console.log(clues["ac"]);
  return (
    <Layout>
      <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
      <h1>A crossword</h1>
      <p>First crossword.</p>
      <div id="xwd-container">
        <Grid blackCells={blackSquares} h={acrossSize} v={downSize}></Grid>
      </div>
      <ClueBox direction={"Across"} clues={clues["ac"]} />
      <ClueBox direction={"Down"} clues={clues["dn"]} />
    </Layout>
  );
};

export default CrosswordPage;
