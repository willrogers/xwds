import React from "react";
import { useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Crossword } from "../components/xwd";
import { Coord } from "../components/xwd_utils";

const CrosswordPage = () => {
  const data = useStaticQuery(graphql`
    query XwdQuery {
      allXwd2020Json {
        edges {
          node {
            across_size
            down_size
            black_squares
            clues {
              ac {
                number
                clue
                length
                date
              }
              dn {
                number
                clue
                length
                date
              }
            }
          }
        }
      }
    }
  `);
  const xwdData = data.allXwd2019Json.edges[0].node;
  const acrossSize = xwdData.across_size;
  const downSize = xwdData.down_size;
  const blackSquares = xwdData.black_squares;
  const rawClues = xwdData.clues;
  const clues = { ac: {}, dn: {} };
  rawClues.ac.forEach((element) => {
    clues.ac[element.number] = [element.clue, element.length, element.date];
  });
  rawClues.dn.forEach((element) => {
    clues.dn[element.number] = [element.clue, element.length, element.date];
  });

  console.log(data);
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
