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
  getWhiteCells,
  ClueDetails,
} from "./xwd_utils";

export function FilledCell(props) {
  return (
    <div
      style={{
        position: "absolute",
        width: props.h + 1 + "px",
        height: props.v + 1 + "px",
        top: props.y + "px",
        left: props.x + "px",
      }}
      className="black-cell"
    ></div>
  );
}
export function EmptyCell(props) {
  let backgroundColor = props.selected
    ? "cyan"
    : props.highlight
      ? "lightblue"
      : "lightgray";

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + "px",
          backgroundColor: backgroundColor,
        }}
        onClick={props.onClick}
        className="white-cell"
      >
        {props.contents}
      </div>
      <div
        className="clue-number"
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + 2 + "px",
        }}
      >
        {props.number}
      </div>
    </>
  );
}

export function CurrentClue(props) {
  let text = "No clue selected.";
  if (props.clue !== null) {
    const { num, direction, clue, letters, releaseDate } = props.clue;
    const now = new Date();
    const words =
      now.getMonth() === 11 && now.getDate() > releaseDate
        ? clue
        : `Released on December ${releaseDate}.`;
    text = `${num} ${direction}. ${words} (${letters})`;
  }
  return (
    <div style={{ padding: "15px" }}>
      <span
        style={{
          fontWeight: "bold",
          padding: "5px",
          margin: "5px",
          backgroundColor: "lightblue",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export function Crossword(props) {
  // a ClueDetails
  const [selectedClue, setSelectedClue] = useState(null);
  const [whiteCells, cells] = getWhiteCells(props.v, props.h, props.blackCells);
  // different to props.clues
  const clues = figureOutClues(props.h, props.v, whiteCells);
  if (props.selectedClueSeq != null) {
    for (const [num, clueSeq] of Object.entries(
      clues[props.selectedClueSeq.direction]
    )) {
      const [clue, letters, date] = props.clues[clueSeq.direction][num];
      const clueDets = new ClueDetails(
        num,
        clueSeq.direction,
        clue,
        letters,
        date
      );
      if (
        clueSeq.equals(props.selectedClueSeq) &&
        !clueDets.equals(selectedClue)
      ) {
        setSelectedClue(clueDets);
      }
    }
  }
  function crosswordOnClick(num, dir) {
    console.log(`crossword onClick() ${dir} ${num}`);
    const clickedClue = clues[dir][num];
    props.setSelectedClueSeq(clickedClue);
    props.setSelectedCell(new Coord(clickedClue.x, clickedClue.y));
  }
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.preamble}</p>
      <CurrentClue clue={selectedClue}></CurrentClue>
      <div style={{ margin: "5px" }} id="xwd-container">
        <Grid
          blackCells={props.blackCells}
          whiteCells={whiteCells}
          cells={cells}
          h={props.h}
          v={props.h}
          clues={clues}
          selectedClue={props.selectedClueSeq}
          setSelectedClue={props.setSelectedClueSeq}
          selectedCell={props.selectedCell}
          setSelectedCell={props.setSelectedCell}
          filledCells={props.filledCells}
          setFilledCells={props.setFilledCells}
          selectNextCell={props.selectNextCell}
        ></Grid>
      </div>
      <ClueBox
        direction={AC}
        clues={props.clues[AC]}
        onClick={crosswordOnClick}
        selectedClue={selectedClue}
      />
      <ClueBox
        direction={DN}
        clues={props.clues[DN]}
        onClick={crosswordOnClick}
        selectedClue={selectedClue}
      />
    </>
  );
}

export function Grid(props) {
  const cellHeight = 28;
  const cellWidth = 28;

  function cellIsBlack(cell) {
    for (let i = 0; i < props.blackCells.length; i++) {
      const blackCell = props.blackCells[i];
      if (cell.x === blackCell.x && cell.y === blackCell.y) {
        return true;
      }
    }
    return false;
  }

  function fillCell(i, j, contents) {
    const newFilledCells = {
      ...props.filledCells,
    };
    newFilledCells[`${i},${j}`] = contents;
    props.setFilledCells(newFilledCells);
  }

  const clueCells = {};
  for (let [key, value] of Object.entries(props.clues[AC])) {
    clueCells[key] = new Coord(value.x, value.y);
  }
  for (let [key, value] of Object.entries(props.clues[DN])) {
    clueCells[key] = new Coord(value.x, value.y);
  }
  function doHighlight(justClicked) {
    if (
      justClicked.x < 0 ||
      justClicked.x >= props.h ||
      justClicked.y < 0 ||
      justClicked.y >= props.v
    ) {
      return;
    }
    if (cellIsBlack(justClicked)) {
      return;
    }
    props.setSelectedCell(justClicked);
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
        // If this clue is the highlighted one already carry on.
        if (props.selectedClue && !props.selectedClue.equals(acHighlighted)) {
          props.setSelectedClue(acHighlighted);
          return;
        } else {
          break;
        }
      }
    }
    for (let value of Object.values(props.clues[DN])) {
      if (cellInClue(value, justClicked)) {
        dnHighlighted = value;
        props.setSelectedClue(dnHighlighted);
        return;
      }
    }
  }

  function moveCell(direction) {
    if (direction === UP) {
      doHighlight(props.selectedCell.nextCell(DN, false));
    } else if (direction === DOWN) {
      doHighlight(props.selectedCell.nextCell(DN, true));
    } else if (direction === LEFT) {
      doHighlight(props.selectedCell.nextCell(AC, false));
    } else if (direction === RIGHT) {
      doHighlight(props.selectedCell.nextCell(AC, true));
    }
  }

  function selectNextClue() {
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
        const coord = new Coord(newClue.x, newClue.y);
        props.setSelectedCell(coord);
        break;
      }
    }
  }

  let highlightedCells = [];
  if (props.selectedClue != null) {
    const { x, y, length, direction } = props.selectedClue;
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
  return (
    <div
      style={{
        position: "relative",
        width: props.h * cellWidth + "px",
        height: props.v * cellHeight + "px",
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
              onClick={(e) => doHighlight(new Coord(i, j))}
              selectNextCell={props.selectNextCell}
              selectNextClue={selectNextClue}
              moveCell={moveCell}
              contents={props.filledCells[`${i},${j}`]}
              setContents={(letter) => fillCell(i, j, letter)}
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
  let num = null;
  let direction = null;
  if (props.selectedClue !== null) {
    num = props.selectedClue.num;
    direction = props.selectedClue.direction;
  }
  return (
    <div
      style={{
        fontWeight: "bold",
        width: "300px",
        display: "inline-block",
        verticalAlign: "top",
        margin: "5px",
      }}
    >
      <div style={{ border: "1px solid black", padding: "5px" }}>
        {DIRNAME[props.direction]}
      </div>
      {Object.entries(props.clues).map((entry) => {
        const [number, vals] = entry;
        const selected = props.direction === direction && number === num;
        const [clueText, len, releaseDate] = vals;

        const now = new Date();
        const text =
          now.getMonth() === 10 && now.getDate() > releaseDate
            ? clueText
            : `Released on December ${releaseDate}.`;
        function onClick() {
          clueBoxOnClick(number);
        }
        return (
          <Clue
            key={number}
            number={number}
            clue={text}
            len={len}
            onClick={onClick}
            selected={selected}
          />
        );
      })}
    </div>
  );
}

export function Clue(props) {
  let classNames = "clue";
  if (props.selected) {
    classNames = `${classNames} selected`;
  }
  return (
    <div className={classNames} onClick={props.onClick}>
      {props.number}. {props.clue} ({props.len})
    </div>
  );
}
