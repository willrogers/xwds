import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Crossword } from "../components/xwd";
import { Coord } from "../components/xwd_utils";

const CrosswordPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query XwdQuery {
      allXwd2020Json {
        edges {
          node {
            title
            preamble
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
  const xwdData = data.allXwd2020Json.edges[0].node;
  const title = xwdData.title;
  const preamble = xwdData.preamble;
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

  const blackCells = blackSquares.map(([x, y]) => new Coord(x, y));
  return (
    <Layout>
      <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
      <Crossword
        title={title}
        preamble={preamble}
        blackCells={blackCells}
        h={acrossSize}
        v={downSize}
        clues={clues}
      />
    </Layout>
  );
};

export default CrosswordPage;
