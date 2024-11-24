import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Crossword } from "../components/xwd";
import { AC, ClueSeq, Coord, DN } from "../components/xwd_utils";
import { Keyboard, KeyboardButton } from "../components/keyboard";

const CrosswordPage = (): JSX.Element => {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [selectedCell, setSelectedCell] = useState<Coord | null>(null);
  const [selectedClueSeq, setSelectedClueSeq] = useState<ClueSeq | null>(null);
  const [filledCells, setFilledCells] = useState<Record<string, string>>({});
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
  const clues = { ac: {}, dn: {} };
  function selectNextCell(forwards = true) {
    console.log(`selected cell ${selectedCell}`);
    if (selectedCell && selectedClueSeq) {
      const x = selectedCell.x;
      const y = selectedCell.y;
      if (selectedClueSeq.direction === AC) {
        if (forwards && x !== selectedClueSeq.x + selectedClueSeq.length - 1) {
          setSelectedCell(new Coord(x + 1, y));
        } else if (!forwards && x !== selectedClueSeq.x) {
          setSelectedCell(new Coord(x - 1, y));
        }
      }
      if (selectedClueSeq.direction === DN) {
        if (forwards && y !== selectedClueSeq.y + selectedClueSeq.length - 1) {
          setSelectedCell(new Coord(x, y + 1));
        } else if (!forwards && y !== selectedClueSeq.y) {
          setSelectedCell(new Coord(x, y - 1));
        }
      }
    }
  }
  const keyPressed = (letter: string) => {
    console.log(`pressed ${letter}`);
    const newFilledCells = {
      ...filledCells,
    };
    if (selectedCell) {
      newFilledCells[selectedCell.str()] = letter;
    }
    console.log(newFilledCells);
    setFilledCells(newFilledCells);
    selectNextCell();
  };
  rawClues.ac.forEach((element) => {
    clues.ac[element.number] = [element.clue, element.length, element.date];
  });
  rawClues.dn.forEach((element) => {
    clues.dn[element.number] = [element.clue, element.length, element.date];
  });

  const blackCells = blackSquares.map(([x, y]) => new Coord(x, y));
  return (
    <>
      <Layout>
        <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
        <Crossword
          title={title}
          preamble={preamble}
          blackCells={blackCells}
          h={acrossSize}
          v={downSize}
          clues={clues}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          selectedClueSeq={selectedClueSeq}
          setSelectedClueSeq={setSelectedClueSeq}
          filledCells={filledCells}
          setFilledCells={setFilledCells}
          selectNextCell={selectNextCell}
        />
      </Layout>
      {showKeyboard && (
        <Keyboard
          keyPressed={keyPressed}
          hideKeyboardPressed={() => setShowKeyboard(false)}
        />
      )}
      <KeyboardButton keyboardPressed={() => setShowKeyboard(!showKeyboard)} />
    </>
  );
};

export default CrosswordPage;
