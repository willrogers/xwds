import React, { useEffect, useState } from "react";
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
import { useCookies } from "react-cookie";

const CrosswordPage = (props: {
  title: string;
  preamble: string;
  year: number;
  month: number;
  acrossSize: number;
  downSize: number;
  blackSquares: any;
  rawClues: any;
}): JSX.Element => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [selectedCell, setSelectedCell] = useState<Coord | null>(null);
  const [selectedClueSeq, setSelectedClueSeq] = useState<ClueSeq | null>(null);
  const [selectedClue, setSelectedClue] = useState<ClueDetails | null>(null);
  const [filledCells, setFilledCells] = useState<Record<string, string>>(
    cookie.cells || {}
  );
  const clueSeqs = { ac: {}, dn: {} };
  props.rawClues.ac.forEach((element) => {
    clueSeqs.ac[element.number] = [element.clue, element.length, element.date];
  });
  props.rawClues.dn.forEach((element) => {
    clueSeqs.dn[element.number] = [element.clue, element.length, element.date];
  });

  const blackCells = props.blackSquares.map(([x, y]) => new Coord(x, y));
  const [whiteCells, cells] = getWhiteCells(
    props.acrossSize,
    props.downSize,
    blackCells
  );
  const clues: Record<string, Record<string, ClueSeq>> = figureOutClues(
    props.acrossSize,
    props.downSize,
    whiteCells
  );
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
      setFilledCells(newFilledCells);
      setCookie("cells", newFilledCells, {
        sameSite: "strict",
        expires: new Date(2100, 1, 1),
      });
      selectNextCell(nextForward);
    } else if (letter === "Tab") {
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
  if (selectedClueSeq != null) {
    for (const [num, clueSeq] of Object.entries(
      clues[selectedClueSeq.direction]
    )) {
      const [clue, letters, date] = clueSeqs[clueSeq.direction][num];
      const clueDets = new ClueDetails(
        num,
        clueSeq.direction,
        clue,
        letters,
        date
      );
      if (clueSeq.equals(selectedClueSeq) && !clueDets.equals(selectedClue)) {
        setSelectedClue(clueDets);
      }
    }
  }

  return (
    <>
      <Layout>
        <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
        <Crossword
          title={props.title}
          preamble={props.preamble}
          year={props.year}
          month={props.month}
          blackCells={blackCells}
          whiteCells={whiteCells}
          cells={cells}
          h={props.acrossSize}
          v={props.downSize}
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
