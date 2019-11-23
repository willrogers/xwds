import React, { useState } from "react";
import {
  AC,
  DN,
  UP,
  DOWN,
  LEFT,
  RIGHT,
  Coord,
  cellInClue,
  figureOutClues
} from "./xwd_utils";

export function FilledCell(props) {
  return (
    <div
      style={{
        position: "absolute",
        width: props.h + 1 + "px",
        height: props.v + 1 + "px",
        top: props.y + "px",
        left: props.x + "px"
      }}
      className="black-cell"
    ></div>
  );
}
export function EmptyCell(props) {
  const [contents, setContents] = useState("");
  const handleKeyUp = event => {
    console.log("pressed " + event.key);
    if (event.key.match(/^[a-z]$/i)) {
      setContents(event.key);
      props.selectNextCell();
    } else if (event.key === "Backspace") {
      setContents("");
      props.selectNextCell(false);
    } else if (event.key === "Delete") {
      setContents("");
    } else if (event.key === "Tab") {
      props.selectNextClue();
    } else if (event.key === "ArrowUp") {
      props.moveCell(UP);
    } else if (event.key === "ArrowDown") {
      props.moveCell(DOWN);
    } else if (event.key === "ArrowLeft") {
      props.moveCell(LEFT);
    } else if (event.key === "ArrowRight") {
      props.moveCell(RIGHT);
    }
  };
  let backgroundColor = props.selected
    ? "cyan"
    : props.highlight
    ? "lightblue"
    : "lightgray";

  return (
    <>
      <input
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + "px",
          backgroundColor: backgroundColor
        }}
        ref={input => input && props.selected && input.focus()}
        onClick={props.onClick}
        className="white-cell"
        type="text"
        onKeyUp={handleKeyUp}
        value={contents}
      ></input>
      <div
        className="clue-number"
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + 2 + "px"
        }}
      >
        {props.number}
      </div>
    </>
  );
}

export function Grid(props) {
  const [highlightedCells1, setHighightedCells1] = useState([]);
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const cells = [];
  const whiteCells = [];
  const cellHeight = 30;
  const cellWidth = 30;

  /* Make array of white cells. */
  for (let i = 0; i < props.h; i++) {
    for (let j = 0; j < props.v; j++) {
      let blackCell = false;
      for (var k = 0; k < props.blackCells.length; k++) {
        const [x, y] = props.blackCells[k];
        if (x === i && y === j) {
          blackCell = true;
        }
      }
      if (!blackCell) {
        whiteCells.push(new Coord(i, j));
      }
      cells.push([i, j, blackCell]);
    }
  }
  const clues = figureOutClues(props.h, props.v, whiteCells);
  const clueCells = {};
  for (let [key, value] of Object.entries(clues[AC])) {
    clueCells[key] = new Coord(value.x, value.y);
  }
  for (let [key, value] of Object.entries(clues[DN])) {
    clueCells[key] = new Coord(value.x, value.y);
  }
  function doHighlight(justClicked) {
    console.log("just clicked");
    console.log(justClicked);
    if (justClicked.x >= props.h || justClicked.y >= props.v) {
      return;
    }
    let matched = false;
    for (const cell of whiteCells) {
      if (justClicked.equals(cell)) {
        matched = true;
      }
    }
    if (!matched) {
      return;
    }
    const highlightedCells = [];
    let acHighlighted = null;
    let dnHighlighted = null;
    for (let value of Object.values(clues[AC])) {
      if (cellInClue(value, justClicked)) {
        acHighlighted = value;
      }
    }
    for (let value of Object.values(clues[DN])) {
      if (cellInClue(value, justClicked)) {
        dnHighlighted = value;
      }
    }
    console.log("highlighted clues:");
    console.log(acHighlighted);
    console.log(dnHighlighted);
    if (
      selectedClue &&
      selectedClue.equals(acHighlighted) &&
      dnHighlighted !== null
    ) {
      console.log("if 1");
      setSelectedCell(justClicked);
      setSelectedClue(dnHighlighted);
      const clue = dnHighlighted;
      for (let i = clue.y; i < clue.y + clue.length; i++) {
        highlightedCells.push([clue.x, i]);
      }
    } else if (
      selectedClue &&
      selectedClue.equals(dnHighlighted) &&
      acHighlighted !== null
    ) {
      console.log("if 2");
      setSelectedCell(justClicked);
      setSelectedClue(acHighlighted);
      const clue = acHighlighted;
      for (let i = clue.x; i < clue.x + clue.length; i++) {
        highlightedCells.push([i, clue.y]);
      }
    } else if (acHighlighted !== null) {
      console.log("hi ac");
      setSelectedCell(justClicked);
      setSelectedClue(acHighlighted);
      const clue = acHighlighted;
      for (let i = clue.x; i < clue.x + clue.length; i++) {
        highlightedCells.push([i, clue.y]);
      }
    } else if (dnHighlighted !== null) {
      console.log("hi dn");
      setSelectedCell(justClicked);
      setSelectedClue(dnHighlighted);
      const clue = dnHighlighted;
      for (let i = clue.y; i < clue.y + clue.length; i++) {
        highlightedCells.push([clue.x, i]);
      }
    }
    setHighightedCells1(highlightedCells);
  }

  function selectNextCell(forwards = true) {
    const { x, y } = selectedCell;
    if (selectedClue.direction === AC) {
      if (forwards && x !== selectedClue.x + selectedClue.length - 1) {
        setSelectedCell(new Coord(x + 1, y));
      } else if (!forwards && x !== selectedClue.x) {
        setSelectedCell(new Coord(x - 1, y));
      }
    }
    if (selectedClue.direction === DN) {
      if (forwards && y !== selectedClue.y + selectedClue.length - 1) {
        setSelectedCell(new Coord(x, y + 1));
      } else if (!forwards && y !== selectedClue.y) {
        setSelectedCell(new Coord(x, y - 1));
      }
    }
  }

  function moveCell(direction) {
    if (direction === UP) {
      doHighlight(selectedCell.nextCell(DN, false));
    } else if (direction === DOWN) {
      doHighlight(selectedCell.nextCell(DN, true));
    } else if (direction === LEFT) {
      doHighlight(selectedCell.nextCell(AC, false));
    } else if (direction === RIGHT) {
      doHighlight(selectedCell.nextCell(AC, true));
    }
  }

  function selectNextClue() {
    console.log("select next clue");
    console.log(selectedClue.direction);
    const dirClues = Object.values(clues[selectedClue.direction]);
    const otherDirection = selectedClue.direction === AC ? DN : AC;
    const otherDirClues = Object.values(clues[otherDirection]);

    for (let i = 0; i < dirClues.length; i++) {
      console.log("sel");
      console.log(selectedClue);
      console.log("iter");
      console.log(dirClues[i]);
      if (selectedClue.equals(dirClues[i])) {
        let newClue;
        if (i !== dirClues.length - 1) {
          console.log("setting 1");
          newClue = dirClues[i + 1];
        } else {
          console.log("setting 2");
          newClue = otherDirClues[0];
        }
        console.log("hello");
        const coord = new Coord(newClue.x, newClue.y);
        console.log("about to highlight");
        doHighlight(coord);
        break;
      }
    }
  }

  console.log(clueCells);
  console.log("highlights");
  console.log(highlightedCells1);
  for (let k = 0; k < cells.length; k++) {
    const [x, y] = cells[k];
    let number = null;
    for (let [key, value] of Object.entries(clueCells)) {
      if (value.x === x && value.y === y) {
        number = key;
      }
    }
    cells[k].push(number);
    let highlight = false;
    for (let l = 0; l < highlightedCells1.length; l++) {
      const [hx, hy] = highlightedCells1[l];
      if (hx === x && hy === y) {
        highlight = true;
      }
    }
    cells[k].push(highlight);
  }
  return (
    <div
      style={{
        position: "relative",
        width: props.h * cellWidth + "px",
        height: props.v * cellHeight + "px"
      }}
    >
      {cells.map(([i, j, blackCell, number, highlight]) => {
        if (blackCell) {
          return (
            <FilledCell
              h={cellWidth}
              v={cellHeight}
              x={i * cellWidth}
              y={j * cellHeight}
              key={i + props.h * j}
            />
          );
        } else {
          return (
            <EmptyCell
              h={cellWidth}
              v={cellHeight}
              x={i * cellWidth}
              y={j * cellHeight}
              key={i + props.h * j}
              number={number}
              highlight={highlight}
              selected={
                selectedCell !== null &&
                i === selectedCell.x &&
                j === selectedCell.y
              }
              onClick={e => doHighlight(new Coord(i, j))}
              selectNextCell={selectNextCell}
              selectNextClue={selectNextClue}
              moveCell={moveCell}
            />
          );
        }
      })}
    </div>
  );
}

export function ClueBox(props) {
  return (
    <div style={{ fontWeight: "bold" }}>
      {props.direction}
      {Object.entries(props.clues).map(entry => {
        const [number, vals] = entry;
        const [words, len, date] = vals;
        return <Clue number={number} clue={words} len={len} />;
      })}
    </div>
  );
}

export function Clue(props) {
  return (
    <div>
      {props.number}. {props.clue} ({props.len})
    </div>
  );
}
