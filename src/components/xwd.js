import React, { useState } from "react";

const AC = "ac";
const DN = "dn";

var coord = function(x, y) {
  return { x: x, y: y };
};

function clueSeq(x, y, length, direction) {
  return { x: x, y: y, length: length, direction: direction };
}

function clueEq(clueSeq1, clueSeq2) {
  return (
    clueSeq1 !== null &&
    clueSeq2 !== null &&
    clueSeq1.x === clueSeq2.x &&
    clueSeq1.y === clueSeq2.y &&
    clueSeq1.length === clueSeq2.length &&
    clueSeq1.direction === clueSeq2.direction
  );
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
function cellInClue(clue, cell) {
  if (clue.direction === AC) {
    for (var i = clue.x; i < clue.x + clue.length; i++) {
      if (cell.x === i && cell.y === clue.y) {
        return true;
      }
    }
  }
  if (clue.direction === DN) {
    for (var i = clue.y; i < clue.y + clue.length; i++) {
      if (cell.x == clue.x && cell.y == i) {
        return true;
      }
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
        top: props.y + "px",
        left: props.x + "px"
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
    props.selectNextCell();
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
  const [highlightedCells1, setHighightedCells1] = useState([]);
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const cells = [];
  const whiteCells = [];
  const cellHeight = 30;
  const cellWidth = 30;

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
  function doHighlight(justClicked) {
    console.log("just clicked");
    console.log(justClicked);
    const highlightedCells = [];
    let acHighlighted = null;
    let dnHighlighted = null;
    for (let [key, value] of Object.entries(clues["acrossClues"])) {
      if (cellInClue(value, justClicked)) {
        acHighlighted = value;
      }
    }
    for (let [key, value] of Object.entries(clues["downClues"])) {
      if (cellInClue(value, justClicked)) {
        dnHighlighted = value;
      }
    }
    console.log("highlighted clues:");
    console.log(acHighlighted);
    console.log(dnHighlighted);
    if (clueEq(selectedClue, acHighlighted) && dnHighlighted !== null) {
      console.log("if 1");
      setSelectedCell(justClicked);
      setSelectedClue(dnHighlighted);
      const clue = dnHighlighted;
      for (let i = clue.y; i < clue.y + clue.length; i++) {
        highlightedCells.push([clue.x, i]);
      }
    } else if (clueEq(selectedClue, dnHighlighted) && acHighlighted !== null) {
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

  function selectNextCell() {
    const { x, y } = selectedCell;
    if (selectedClue.direction === AC) {
      if (x !== selectedClue.x + selectedClue.length - 1) {
        setSelectedCell(coord(x + 1, y));
      }
    }
    if (selectedClue.direction === DN) {
      if (y !== selectedClue.y + selectedClue.length - 1) {
        setSelectedCell(coord(x, y + 1));
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
              onClick={e => doHighlight(coord(i, j))}
              selectNextCell={selectNextCell}
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
