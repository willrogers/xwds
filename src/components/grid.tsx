import React from "react";

import { AC, AllClues, ClueSeq, Coord, DN } from "./utils";
import { EmptyCell, FilledCell } from "./cells";

export function Grid(props: {
  h: number;
  v: number;
  clues: AllClues;
  selectedCell: Coord | null;
  selectedClue: ClueSeq | null;
  cells: Array<[number, number, boolean]>;
  filledCells: { [key: string]: string };
  doHighlight: (cell: Coord, clicked: boolean) => void;
}) {
  const cellHeight = 28;
  const cellWidth = 28;
  const cellsPlus: Array<[number, number, boolean, string | null, boolean]> =
    [];

  const clueCells: { [key: number]: Coord } = {};
  for (const [key, value] of Object.entries(props.clues[AC])) {
    clueCells[parseInt(key)] = new Coord(value.x, value.y);
  }
  for (const [key, value] of Object.entries(props.clues[DN])) {
    clueCells[parseInt(key)] = new Coord(value.x, value.y);
  }

  const highlightedCells: Array<Coord> = [];
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
    const [x, y, blackCell] = props.cells[k];
    let number: string | null = null;
    for (const [key, value] of Object.entries(clueCells)) {
      if (value.x === x && value.y === y) {
        number = key;
      }
    }
    let highlight = false;
    for (let l = 0; l < highlightedCells.length; l++) {
      if (x === highlightedCells[l].x && y === highlightedCells[l].y) {
        highlight = true;
      }
    }
    cellsPlus.push([x, y, blackCell, number, highlight]);
  }
  return (
    <div
      style={{
        position: "relative",
        width: props.h * cellWidth + "px",
        height: props.v * cellHeight + "px",
      }}
    >
      {cellsPlus.map(([i, j, blackCell, number, highlight]) => {
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
              number={number!}
              contents={props.filledCells[`${i},${j}`]}
              highlight={highlight}
              selected={
                props.selectedCell !== null &&
                i === props.selectedCell.x &&
                j === props.selectedCell.y
              }
              onClick={() => props.doHighlight(new Coord(i, j), true)}
            />
          );
        }
      })}
    </div>
  );
}
