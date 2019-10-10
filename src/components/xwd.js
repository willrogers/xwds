import React, { useState } from "react";

var coord = function(x, y) {
  return { x: x, y: y };
};

function clueSeq(x, y, length, direction) {
  return { x: x, y: y, length: length, direction: direction };
}

function cellInArray(array, cell) {
  for (var k = 0; k < array.length; k++) {
    const { x, y } = array[k];
    if (x === cell.x && y === cell.y) {
      return true;
    }
  }
  return false;
}

const figureOutClues = (acSquares, dnSquares, whiteSquares) => {
  /* Collect clues and write in numbers */
  var acrossClues = [];
  var downClues = [];
  var clueNumber = 1;
  /* loop from right to left then top to bottom */
  for (var j = 0; j < dnSquares; j++) {
    for (var i = 0; i < acSquares; i++) {
      var cell = coord(i, j);
      var acrossCount = 0;
      var downCount = 0;
      if (cellInArray(whiteSquares, cell)) {
        /* Start of across clue */
        if (i === 0 || !cellInArray(whiteSquares, coord(i - 1, j))) {
          acrossCount = 1;
          for (var k = i + 1; k < acSquares; k++) {
            if (cellInArray(whiteSquares, coord(k, j))) {
              acrossCount += 1;
            } else {
              break;
            }
          }
          if (acrossCount > 1) {
            acrossClues[clueNumber] = clueSeq(i, j, acrossCount, "ac");
          }
        }
        /* Start of down clue */
        if (j === 0 || !cellInArray(whiteSquares, coord(i, j - 1))) {
          downCount = 1;
          for (var l = j + 1; l < dnSquares; l++) {
            if (cellInArray(whiteSquares, coord(i, l))) {
              downCount += 1;
            } else {
              break;
            }
          }
          if (downCount > 1) {
            downClues[clueNumber] = clueSeq(i, j, downCount, "dn");
          }
        }
        if (acrossCount > 1 || downCount > 1) {
          clueNumber += 1;
        }
      }
    }
  }
  return {
    acrossClues: acrossClues,
    downClues: downClues
  };
};

export function FilledCell(props) {
  return (
    <div
      style={{
        position: "absolute",
        width: props.h + 1 + "px",
        height: props.v + 1 + "px",
        top: props.x + "px",
        left: props.y + "px"
      }}
      className="black-cell"
    ></div>
  );
}
export function EmptyCell(props) {
  const [contents, setContents] = useState("");
  const handleKeyPress = event => {
    console.log("pressed " + event.key);
    setContents(event.key);
  };

  return (
    <>
      <input
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + "px"
        }}
        onClick={props.onClick}
        className="white-cell"
        type="text"
        onKeyPress={handleKeyPress}
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
  const [selectedCell, setSelectedCell] = useState(coord(0, 0));
  console.log("selected cell:");
  console.log(selectedCell);
  const cells = [];
  const whiteCells = [];

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
        whiteCells.push(coord(i, j));
      }
      cells.push([i, j, blackCell]);
    }
  }
  const clues = figureOutClues(props.h, props.v, whiteCells);
  console.log(clues);
  const clueCells = {};
  for (let [key, value] of Object.entries(clues["acrossClues"])) {
    clueCells[key] = coord(value.x, value.y);
  }
  for (let [key, value] of Object.entries(clues["downClues"])) {
    clueCells[key] = coord(value.x, value.y);
  }
  console.log(clueCells);
  for (let k = 0; k < cells.length; k++) {
    const [x, y] = cells[k];
    for (let [key, value] of Object.entries(clueCells)) {
      if (value.x === x && value.y === y) {
        cells[k].push(key);
      }
    }
  }
  return (
    <div
      style={{
        position: "relative",
        width: props.h * 20 + "px",
        height: props.v * 20 + "px"
      }}
    >
      {cells.map(([i, j, blackCell, number]) => {
        if (blackCell) {
          return (
            <FilledCell
              h={20}
              v={20}
              x={i * 20}
              y={j * 20}
              key={i + props.h * j}
            />
          );
        } else {
          return (
            <EmptyCell
              h={20}
              v={20}
              x={i * 20}
              y={j * 20}
              key={i + props.h * j}
              number={number}
              onClick={e => setSelectedCell(coord(i, j))}
            />
          );
        }
      })}
    </div>
  );
}
