import React from "react";
import { AC, DN, DIRNAME } from "./xwd_utils";
import { Coord } from "./utils";
import { EmptyCell, FilledCell } from "./cells";

export function CurrentClue(props) {
  let id = "";
  let text = "No clue selected.";
  if (props.clue !== null) {
    const { num, direction, clue, letters, releaseDay } = props.clue;
    id = `${num} ${direction}`;
    const now = new Date();
    const releaseDate = new Date(props.year, props.month, releaseDay);
    const words =
      now > releaseDate ? clue : `Released on December ${releaseDay}.`;
    text = `${words}\u00A0(${letters})`;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "15px",
        fontWeight: "bold",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          textWrap: "nowrap",
          fontWeight: "bold",
          //  padding: "5px",
          margin: "5px",
        }}
      >
        {id}
      </div>
      <div
        style={{
          fontWeight: "bold",
          // padding: "5px",
          margin: "5px",
          backgroundColor: "lightblue",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export function Grid(props) {
  const cellHeight = 28;
  const cellWidth = 28;

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
              contents={props.filledCells[`${i},${j}`]}
              highlight={highlight}
              selected={
                props.selectedCell !== null &&
                i === props.selectedCell.x &&
                j === props.selectedCell.y
              }
              onClick={() => props.doHighlight(new Coord(i, j))}
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
