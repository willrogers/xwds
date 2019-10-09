import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid } from "../components/xwd";

const CrosswordPage = () => {
  const [blackSquares, setBlackSquares] = useState([]);
  const [acrossSize, setAcrossSize] = useState(0);
  const [downSize, setDownSize] = useState(0);
  if (blackSquares.length === 0) {
    fetch("/xwd2018.json")
      .then(data => {
        console.log("then 1");
        console.log(data);
        console.log("then 2");
        return data.json();
      })
      .then(json => {
        setBlackSquares(json["black-squares"]);
        setAcrossSize(json["across-size"]);
        setDownSize(json["down-size"]);
      });
  }
  return (
    <Layout>
      <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
      <h1>A crossword</h1>
      <p>First crossword.</p>
      <div id="xwd-container">
        <Grid blackCells={blackSquares} h={acrossSize} v={downSize}></Grid>
      </div>
    </Layout>
  );
};

export default CrosswordPage;
