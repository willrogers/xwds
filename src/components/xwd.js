import React, { useState } from "react";
import {
  AC,
  DN,
  UP,
  DOWN,
  LEFT,
  RIGHT,
  DIRNAME,
  Coord,
  cellInClue,
  figureOutClues,
  getWhiteCells
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

export function Crossword(props) {
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [whiteCells, cells] = getWhiteCells(props.v, props.h, props.blackCells);
  const clues = figureOutClues(props.h, props.v, whiteCells);
  function crosswordOnClick(num, dir) {
    console.log(`crossword onClick() ${dir} ${num}`);
    setSelectedClue(clues[dir][num]);
  }
  return (
    <>
      <h1>A crossword</h1>
      <p>First crossword.</p>
      <div id="xwd-container">
        <Grid
          blackCells={props.blackCells}
          whiteCells={whiteCells}
          cells={cells}
          h={props.h}
          v={props.h}
          clues={clues}
          selectedClue={selectedClue}
          setSelectedClue={setSelectedClue}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        ></Grid>
      </div>
      <ClueBox
        direction={AC}
        clues={props.clues[AC]}
        onClick={crosswordOnClick}
      />
      <ClueBox
        direction={DN}
        clues={props.clues[DN]}
        onClick={crosswordOnClick}
      />
    </>
  );
}

export function Grid(props) {
  const cellHeight = 30;
  const cellWidth = 30;

  const clueCells = {};
  for (let [key, value] of Object.entries(props.clues[AC])) {
    clueCells[key] = new Coord(value.x, value.y);
  }
  for (let [key, value] of Object.entries(props.clues[DN])) {
    clueCells[key] = new Coord(value.x, value.y);
  }
  function doHighlight(justClicked, direction) {
    props.setSelectedCell(justClicked);
    console.log("just clicked");
    console.log(justClicked);
    if (justClicked.x >= props.h || justClicked.y >= props.v) {
      return;
    }
    let matched = false;
    for (const cell of props.whiteCells) {
      if (justClicked.equals(cell)) {
        matched = true;
      }
    }
    if (!matched) {
      return;
    }
    const highlighted = [];
    let acHighlighted = null;
    let dnHighlighted = null;
    for (let value of Object.values(props.clues[AC])) {
      if (cellInClue(value, justClicked)) {
        acHighlighted = value;
        props.setSelectedClue(acHighlighted);
        console.log("selected clue");
        console.log(acHighlighted);
        return;
      }
    }
    for (let value of Object.values(props.clues[DN])) {
      if (cellInClue(value, justClicked)) {
        dnHighlighted = value;
        props.setSelectedClue(dnHighlighted);
        console.log("selected clue");
        console.log(dnHighlighted);
        return;
      }
    }
    /*
    console.log("highlighted clues:");
    console.log(acHighlighted);
    console.log(dnHighlighted);
    if (
      props.selectedClue &&
      props.selectedClue.equals(acHighlighted) &&
      dnHighlighted !== null
    ) {
      console.log("if 1");
      props.setSelectedCell(justClicked);
      props.setSelectedClue(dnHighlighted);
      const clue = dnHighlighted;
      for (let i = clue.y; i < clue.y + clue.length; i++) {
        highlighted.push([clue.x, i]);
      }
    } else if (
      props.selectedClue &&
      props.selectedClue.equals(dnHighlighted) &&
      acHighlighted !== null
    ) {
      console.log("if 2");
      props.setSelectedCell(justClicked);
      props.setSelectedClue(acHighlighted);
      const clue = acHighlighted;
      for (let i = clue.x; i < clue.x + clue.length; i++) {
        highlighted.push([i, clue.y]);
      }
    } else if (acHighlighted !== null) {
      console.log("hi ac");
      props.setSelectedCell(justClicked);
      props.setSelectedClue(acHighlighted);
      const clue = acHighlighted;
      for (let i = clue.x; i < clue.x + clue.length; i++) {
        highlighted.push([i, clue.y]);
      }
    } else if (dnHighlighted !== null) {
      console.log("hi dn");
      props.setSelectedCell(justClicked);
      props.setSelectedClue(dnHighlighted);
      const clue = dnHighlighted;
      for (let i = clue.y; i < clue.y + clue.length; i++) {
        highlighted.push([clue.x, i]);
      }
    }
    props.setHighlightedCells(highlighted);
  */
  }

  function selectNextCell(forwards = true) {
    /*
    const { x, y } = props.selectedCell;
    if (props.selectedClue.direction === AC) {
      if (
        forwards &&
        x !== props.selectedClue.x + props.selectedClue.length - 1
      ) {
        props.setSelectedCell(new Coord(x + 1, y));
      } else if (!forwards && x !== props.selectedClue.x) {
        props.setSelectedCell(new Coord(x - 1, y));
      }
    }
    if (props.selectedClue.direction === DN) {
      if (
        forwards &&
        y !== props.selectedClue.y + props.selectedClue.length - 1
      ) {
        props.setSelectedCell(new Coord(x, y + 1));
      } else if (!forwards && y !== props.selectedClue.y) {
        props.setSelectedCell(new Coord(x, y - 1));
      }
    }
  */
  }

  function moveCell(direction) {
    /*
    if (direction === UP) {
      doHighlight(props.selectedCell.nextCell(DN, false));
    } else if (direction === DOWN) {
      doHighlight(props.selectedCell.nextCell(DN, true));
    } else if (direction === LEFT) {
      doHighlight(props.selectedCell.nextCell(AC, false));
    } else if (direction === RIGHT) {
      doHighlight(props.selectedCell.nextCell(AC, true));
    }
  */
  }

  function selectNextClue() {
    /*
    console.log("select next clue");
    console.log(props.selectedClue.direction);
    const dirClues = Object.values(props.clues[props.selectedClue.direction]);
    const otherDirection = props.selectedClue.direction === AC ? DN : AC;
    const otherDirClues = Object.values(props.clues[otherDirection]);
    console.log(otherDirection);

    for (let i = 0; i < dirClues.length; i++) {
      console.log("sel");
      console.log(props.selectedClue);
      console.log("iter");
      console.log(dirClues[i]);
      if (props.selectedClue.equals(dirClues[i])) {
        let newClue;
        if (i !== dirClues.length - 1) {
          console.log("setting 1");
          newClue = dirClues[i + 1];
        } else {
          console.log("setting 2");
          newClue = otherDirClues[0];
        }
        props.setSelectedClue(newClue);
        console.log("newClue");
        console.log(newClue);
        const coord = new Coord(newClue.x, newClue.y);
        console.log("about to highlight");
        doHighlight(coord, newClue.direction);
        break;
      }
    }
  */
  }

  let highlightedCells = [];
  if (props.selectedClue != null) {
    const { x, y, length, direction } = props.selectedClue;
    console.log(x);
    console.log(y);
    console.log(length);
    console.log(direction);
    if (direction == AC) {
      for (let i = x; i < x + length; i++) {
        highlightedCells.push(new Coord(i, y));
      }
    } else {
      for (let i = y; i < y + length; i++) {
        highlightedCells.push(new Coord(x, i));
      }
    }
  }

  console.log(clueCells);
  console.log("highlights");
  console.log(highlightedCells);
  for (let k = 0; k < props.cells.length; k++) {
    const [x, y] = props.cells[k];
    let number = null;
    for (let [key, value] of Object.entries(clueCells)) {
      if (value.x === x && value.y === y) {
        number = key;
      }
    }
    props.cells[k].push(number);
    let highlight = false;
    for (let l = 0; l < highlightedCells.length; l++) {
      if (x === highlightedCells[l].x && y === highlightedCells[l].y) {
        highlight = true;
      }
    }
    props.cells[k].push(highlight);
  }
  console.log(props.cells);
  return (
    <div
      style={{
        position: "relative",
        width: props.h * cellWidth + "px",
        height: props.v * cellHeight + "px"
      }}
    >
      {props.cells.map(([i, j, blackCell, number, highlight]) => {
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
                props.selectedCell !== null &&
                i === props.selectedCell.x &&
                j === props.selectedCell.y
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
  function clueBoxOnClick(number) {
    props.onClick(number, props.direction);
  }
  return (
    <div style={{ fontWeight: "bold" }}>
      {DIRNAME[props.direction]}
      {Object.entries(props.clues).map(entry => {
        const [number, vals] = entry;
        const [words, len] = vals;
        function onClick() {
          clueBoxOnClick(number);
        }
        return (
          <Clue number={number} clue={words} len={len} onClick={onClick} />
        );
      })}
    </div>
  );
}

export function Clue(props) {
  return (
    <div onClick={props.onClick}>
      {props.number}. {props.clue} ({props.len})
    </div>
  );
}
