import React, { useEffect, useReducer, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Crossword } from "../components/xwd";
import {
  AC,
  ClueDetails,
  ClueSeq,
  Coord,
  DN,
  figureOutClues,
  getWhiteCells,
} from "../components/xwd_utils";
import { Keyboard, KeyboardButton } from "../components/keyboard";

const CrosswordPage = (): JSX.Element => {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [selectedCell, setSelectedCell] = useState<Coord | null>(null);
  const [selectedClueSeq, setSelectedClueSeq] = useState<ClueSeq | null>(null);
  const [selectedClue, setSelectedClue] = useState<ClueDetails | null>(null);
  const [filledCells, setFilledCells] = useState<Record<string, string>>({});
  const data = useStaticQuery(graphql`
    query {
      allXwd2024Json {
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
  const xwdData = data.allXwd2024Json.edges[0].node;
  const title = xwdData.title;
  const preamble = xwdData.preamble;
  const acrossSize = xwdData.across_size;
  const downSize = xwdData.down_size;
  const blackSquares = xwdData.black_squares;
  const rawClues = xwdData.clues;
  const clueSeqs = { ac: {}, dn: {} };
  rawClues.ac.forEach((element) => {
    clueSeqs.ac[element.number] = [element.clue, element.length, element.date];
  });
  rawClues.dn.forEach((element) => {
    clueSeqs.dn[element.number] = [element.clue, element.length, element.date];
  });

  const blackCells = blackSquares.map(([x, y]) => new Coord(x, y));
  const [whiteCells, cells] = getWhiteCells(acrossSize, downSize, blackCells);
  const clues = figureOutClues(acrossSize, downSize, whiteCells);
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

  function selectNextClue(): void {
    if (selectedClueSeq !== null) {
      console.log("select next clue");
      const dirClues = Object.values(clues[selectedClueSeq.direction]);
      const otherDirection = selectedClueSeq.direction === AC ? DN : AC;
      const otherDirClues = Object.values(clues[otherDirection]);

      for (let i = 0; i < dirClues.length; i++) {
        console.log("sel");
        console.log(selectedClue);
        console.log("iter");
        console.log(dirClues[i]);
        if (selectedClueSeq.equals(dirClues[i])) {
          let newClue;
          if (i !== dirClues.length - 1) {
            console.log("setting 1");
            newClue = dirClues[i + 1];
          } else {
            console.log("setting 2");
            newClue = otherDirClues[0];
          }
          setSelectedClueSeq(newClue);
          const coord = new Coord(newClue.x, newClue.y);
          setSelectedCell(coord);
          break;
        }
      }
    }
  }

  const keyPressed = (letter: string) => {
    console.log(`pressed ${letter}`);
    const backspace = letter === "\u232B" || letter === "Backspace";
    if (letter.match(/^[a-z]$/i) || backspace) {
      console.log(`selne ${backspace}`);
      const cellContents = backspace ? "" : letter;
      const nextForward = !backspace;

      const newFilledCells = {
        ...filledCells,
      };
      if (selectedCell) {
        newFilledCells[selectedCell.str()] = cellContents;
      }
      console.log(newFilledCells);
      setFilledCells(newFilledCells);
      selectNextCell(nextForward);
    } else if (letter === "Tab") {
      console.log("selne");
      selectNextClue();
    } else if ((letter = "ArrowRight")) {
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleKeyUp = (event: KeyboardEvent) => {
    keyPressed(event.key);
    event.preventDefault();
    event.stopPropagation();
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <>
      <Layout>
        <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
        <Crossword
          title={title}
          preamble={preamble}
          blackCells={blackCells}
          whiteCells={whiteCells}
          cells={cells}
          h={acrossSize}
          v={downSize}
          clueSeqs={clueSeqs}
          clues={clues}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          selectedClue={selectedClue}
          setSelectedClue={setSelectedClue}
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
