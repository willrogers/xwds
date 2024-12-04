import { ClueSeq, Coord, cellInArray } from "./utils";

export const AC = "ac";
export const DN = "dn";
export const UP = "up";
export const DOWN = "down";
export const LEFT = "left";
export const RIGHT = "right";
export const DIRNAME = { ac: "Across", dn: "Down" };

export class ClueDetails {
  constructor(num, direction, clue, letters, releaseDay) {
    this.num = num;
    this.direction = direction;
    this.clue = clue;
    this.letters = letters;
    this.releaseDay = releaseDay;
  }
  equals(other) {
    return (
      other !== null &&
      this.num === other.num &&
      this.direction === other.direction
    );
  }
}

export function figureOutClues(acSquares, dnSquares, whiteSquares) {
  /* Collect clues and write in numbers */
  var acrossClues = {};
  var downClues = {};
  var clueNumber = 1;
  /* loop from right to left then top to bottom */
  for (var j = 0; j < dnSquares; j++) {
    for (var i = 0; i < acSquares; i++) {
      var cell = new Coord(i, j);
      var acrossCount = 0;
      var downCount = 0;
      if (cellInArray(whiteSquares, cell)) {
        /* Start of across clue */
        if (i === 0 || !cellInArray(whiteSquares, new Coord(i - 1, j))) {
          acrossCount = 1;
          for (var k = i + 1; k < acSquares; k++) {
            if (cellInArray(whiteSquares, new Coord(k, j))) {
              acrossCount += 1;
            } else {
              break;
            }
          }
          if (acrossCount > 1) {
            acrossClues[clueNumber] = new ClueSeq(i, j, acrossCount, AC);
          }
        }
        /* Start of down clue */
        if (j === 0 || !cellInArray(whiteSquares, new Coord(i, j - 1))) {
          downCount = 1;
          for (var l = j + 1; l < dnSquares; l++) {
            if (cellInArray(whiteSquares, new Coord(i, l))) {
              downCount += 1;
            } else {
              break;
            }
          }
          if (downCount > 1) {
            downClues[clueNumber] = new ClueSeq(i, j, downCount, DN);
          }
        }
        if (acrossCount > 1 || downCount > 1) {
          clueNumber += 1;
        }
      }
    }
  }
  return {
    ac: acrossClues,
    dn: downClues,
  };
}
