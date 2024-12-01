import React from "react";
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
      : "white";

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
    const { num, direction, clue, letters, releaseDay } = props.clue;
    const now = new Date();
    const releaseDate = new Date(props.year, props.month, releaseDay);
    const words =
      now > releaseDate ? clue : `Released on December ${releaseDay}.`;
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
  function clueClicked(num, dir) {
    const clickedClue = props.clues[dir][num];
    props.setSelectedClueSeq(clickedClue);
    props.setSelectedCell(new Coord(clickedClue.x, clickedClue.y));
  }
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.preamble}</p>
      <CurrentClue
        clue={props.selectedClue}
        year={props.year}
        month={props.month}
      ></CurrentClue>
      <div style={{ margin: "5px" }} id="xwd-container">
        <Grid
          blackCells={props.blackCells}
          whiteCells={props.whiteCells}
          cells={props.cells}
          h={props.h}
          v={props.h}
          clues={props.clues}
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
        clues={props.clueSeqs[AC]}
        onClick={clueClicked}
        selectedClue={props.selectedClue}
        year={props.year}
        month={props.month}
      />
      <ClueBox
        direction={DN}
        clues={props.clueSeqs[DN]}
        onClick={clueClicked}
        selectedClue={props.selectedClue}
        year={props.year}
        month={props.month}
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
    let acHighlighted = null;
    let dnHighlighted = null;
    for (let value of Object.values(props.clues[AC])) {
      if (cellInClue(value, justClicked)) {
        acHighlighted = value;
        // If this clue is the highlighted one already carry on.
        if (!props.selectedClue || !props.selectedClue.equals(acHighlighted)) {
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
              selectNextClue={props.selectNextClue}
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
        const [clueText, len, releaseDay] = vals;

        const now = new Date();
        const releaseDate = new Date(props.year, props.month, releaseDay);
        const today = now.getDay() === releaseDay - 1;
        const text =
          now > releaseDate ? clueText : `Released on December ${releaseDay}.`;
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
            today={today}
          />
        );
      })}
    </div>
  );
}

export function Clue(props) {
  let classNames = "clue";
  if (props.today) {
    classNames = `${classNames} today`;
  }
  if (props.selected) {
    classNames = `${classNames} selected`;
  }
  return (
    <div className={classNames} onClick={props.onClick}>
      {props.number}. {props.clue} ({props.len.join(",")})
    </div>
  );
}
