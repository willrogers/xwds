export const AC = "ac";
export const DN = "dn";

export class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equals(other) {
    return other !== null && this.x === other.x && this.y === other.y;
  }
}

export class ClueSeq {
  constructor(x, y, length, direction) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.direction = direction;
  }
  equals(other) {
    return (
      other !== null &&
      this.x === other.x &&
      this.y === other.y &&
      this.length === other.length &&
      this.direction === other.direction
    );
  }
}

export function cellInArray(array, cell) {
  for (var k = 0; k < array.length; k++) {
    const { x, y } = array[k];
    if (x === cell.x && y === cell.y) {
      return true;
    }
  }
  return false;
}

export function cellInClue(clue, cell) {
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

export function figureOutClues(acSquares, dnSquares, whiteSquares) {
  /* Collect clues and write in numbers */
  var acrossClues = [];
  var downClues = [];
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
            acrossClues[clueNumber] = new ClueSeq(i, j, acrossCount, "ac");
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
            downClues[clueNumber] = new ClueSeq(i, j, downCount, "dn");
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
}
