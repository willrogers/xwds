import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import {
  AC,
  AllClues,
  ClueDetails,
  ClueSeq,
  Coord,
  DN,
  Direction,
  cellInClue,
  figureOutClues,
  getWhiteCells,
} from "./utils";
import { Keyboard, KeyboardButton } from "../components/keyboard";
import { useCookies } from "react-cookie";
import { Grid } from "./grid";
import { ClueBox, CurrentClue } from "./clues";

const CrosswordPage = (props: {
  title: string;
  preamble: string;
  year: number;
  month: number;
  acrossSize: number;
  downSize: number;
  blackSquares: any;
  rawClues: any;
}) => {
  const [cookie, setCookie] = useCookies();
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [selectedCell, setSelectedCell] = useState<Coord | null>(null);
  const [selectedClueSeq, setSelectedClueSeq] = useState<ClueSeq | null>(null);
  const [selectedClue, setSelectedClue] = useState<ClueDetails | null>(null);
  const [filledCells, setFilledCells] = useState<{ [key: string]: string }>({});

  // Load cookies after hydration to prevent SSR mismatch
  useEffect(() => {
    if (cookie.cells) {
      setFilledCells(cookie.cells);
    }
  }, [cookie.cells]);
  const clueArrays: {
    [AC]: { [key: number]: [string, number, number] };
    [DN]: { [key: number]: [string, number, number] };
  } = { [AC]: {}, [DN]: {} };
  (props.rawClues[AC] || []).forEach((element: any) => {
    clueArrays[AC][element.number] = [
      element.clue,
      element.length,
      element.date,
    ];
  });
  (props.rawClues.dn || []).forEach((element: any) => {
    clueArrays[DN][element.number] = [
      element.clue,
      element.length,
      element.date,
    ];
  });

  const blackCells = (props.blackSquares || []).map(
    ([x, y]: [number, number]) => new Coord(x, y)
  );
  const [whiteCells, cells] = getWhiteCells(
    props.acrossSize,
    props.downSize,
    blackCells
  );
  const clues: AllClues = figureOutClues(
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
      const dirClues = Object.values<ClueSeq>(clues[selectedClueSeq.direction]);
      const otherDirection = selectedClueSeq.direction === AC ? DN : AC;
      const otherDirClues = Object.values<ClueSeq>(clues[otherDirection]);

      for (let i = 0; i < dirClues.length; i++) {
        console.log(selectedClue);
        console.log(dirClues[i]);
        if (selectedClueSeq.equals(dirClues[i])) {
          let newClue;
          if (i !== dirClues.length - 1) {
            newClue = dirClues[i + 1];
          } else {
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
  function cellIsBlack(cell: Coord): boolean {
    for (let i = 0; i < blackCells.length; i++) {
      const blackCell = blackCells[i];
      if (cell.x === blackCell.x && cell.y === blackCell.y) {
        return true;
      }
    }
    return false;
  }
  function doHighlight(cell: Coord, clicked: boolean): void {
    if (
      cell.x < 0 ||
      cell.x >= props.acrossSize ||
      cell.y < 0 ||
      cell.y >= props.downSize
    ) {
      return;
    }
    if (cellIsBlack(cell)) {
      return;
    }
    setSelectedCell(cell);
    let matched = false;
    for (const whiteCell of whiteCells) {
      if (cell.equals(whiteCell)) {
        matched = true;
      }
    }
    if (!matched) {
      return;
    }
    if (!clicked && selectedClueSeq && cellInClue(selectedClueSeq, cell)) {
      return;
    }
    if (
      clicked &&
      selectedClueSeq &&
      !cell.equals(selectedCell) &&
      cellInClue(selectedClueSeq, cell)
    ) {
      return;
    }
    let acHighlighted: ClueSeq | null = null;
    let dnHighlighted: ClueSeq | null = null;
    for (const value of Object.values<ClueSeq>(clues[AC])) {
      if (cellInClue(value, cell)) {
        acHighlighted = value;
        // If this clue is the highlighted one already carry on.
        if (!selectedClueSeq || !selectedClueSeq.equals(acHighlighted)) {
          setSelectedClueSeq(acHighlighted);
          return;
        } else {
          break;
        }
      }
    }
    for (const value of Object.values<ClueSeq>(clues[DN])) {
      if (cellInClue(value, cell)) {
        dnHighlighted = value;
        setSelectedClueSeq(dnHighlighted);
        return;
      }
    }
  }

  const keyPressed = (letter: string): void => {
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
    } else if (selectedCell) {
      if (letter === "ArrowRight") {
        if (selectedClueSeq?.direction === AC) {
          doHighlight(selectedCell.nextCell(AC, true), false);
        } else {
          doHighlight(selectedCell, true);
        }
      } else if (letter === "ArrowLeft") {
        if (selectedClueSeq?.direction === AC) {
          doHighlight(selectedCell.nextCell(AC, false), false);
        } else {
          doHighlight(selectedCell, true);
        }
      } else if (letter === "ArrowUp") {
        if (selectedClueSeq?.direction === DN) {
          doHighlight(selectedCell.nextCell(DN, false), false);
        } else {
          doHighlight(selectedCell, true);
        }
      } else if (letter === "ArrowDown") {
        if (selectedClueSeq?.direction === DN) {
          doHighlight(selectedCell.nextCell(DN, true), false);
        } else {
          doHighlight(selectedCell, true);
        }
      }
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
  function clueClicked(num: string, dir: Direction) {
    const clickedClue = clues[dir][num];
    setSelectedClueSeq(clickedClue);
    setSelectedCell(new Coord(clickedClue.x, clickedClue.y));
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });
  if (selectedClueSeq != null) {
    for (const [num, clueSeq] of Object.entries<ClueSeq>(
      clues[selectedClueSeq.direction]
    )) {
      const [, letters, date] = clueArrays[clueSeq.direction][parseInt(num)];
      const clueDets = new ClueDetails(num, clueSeq, date);
      if (clueSeq.equals(selectedClueSeq) && !clueDets.equals(selectedClue)) {
        setSelectedClue(clueDets);
      }
    }
  }

  let clueText;
  if (selectedClue) {
    clueText = props.rawClues[
      selectedClue.clue.direction === AC ? "ac" : "dn"
    ].find((clue: any) => clue.number === selectedClue.num)?.clue;
  }

  return (
    <>
      <Layout>
        <h2>{props.title}</h2>
        <p>{props.preamble}</p>
        <CurrentClue
          clue={selectedClue}
          clueText={clueText}
          year={props.year}
          month={props.month}
        ></CurrentClue>
        <div style={{ margin: "5px" }} id="xwd-container">
          <Grid
            cells={cells}
            h={props.acrossSize}
            v={props.downSize}
            clues={clues}
            selectedClue={selectedClueSeq}
            selectedCell={selectedCell}
            filledCells={filledCells}
            doHighlight={doHighlight}
          ></Grid>
        </div>
        <ClueBox
          direction={AC}
          clues={clueArrays[AC]}
          onClick={clueClicked}
          selectedClue={selectedClue}
          year={props.year}
          month={props.month}
        />
        <ClueBox
          direction={DN}
          clues={clueArrays[DN]}
          onClick={clueClicked}
          selectedClue={selectedClue}
          year={props.year}
          month={props.month}
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
