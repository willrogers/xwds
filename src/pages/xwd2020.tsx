import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import CrosswordPage from "../components/crossword";

const Crossword2020 = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
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
  return (
    <CrosswordPage
      title={title}
      preamble={preamble}
      year={2020}
      month={11}
      acrossSize={acrossSize}
      downSize={downSize}
      blackSquares={blackSquares}
      rawClues={rawClues}
    />
  );
};

export default Crossword2020;
