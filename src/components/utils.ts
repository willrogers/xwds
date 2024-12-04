export const AC = "ac";
export const DN = "dn";
export type Direction = typeof AC | typeof DN;
export const UP = "up";
export const DOWN = "down";
export const LEFT = "left";
export const RIGHT = "right";
export const DIRNAME = { [AC]: "Across", [DN]: "Down" };

export class Coord {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  equals(other: Coord | null): boolean {
    return other !== null && this.x === other.x && this.y === other.y;
  }
  nextCell(direction: string, forwards = true): Coord {
    const increment = forwards ? 1 : -1;
    if (direction === AC) {
      return new Coord(this.x + increment, this.y);
    } else {
      return new Coord(this.x, this.y + increment);
    }
  }
  str(): string {
    return `${this.x},${this.y}`;
  }
}

export class ClueSeq {
  x: number;
  y: number;
  length: number;
  direction: Direction;
  constructor(x: number, y: number, length: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.direction = direction;
  }
  equals(other: ClueSeq): boolean {
    return (
      other !== null &&
      this.x === other.x &&
      this.y === other.y &&
      this.length === other.length &&
      this.direction === other.direction
    );
  }
}

export class ClueDetails {
  num: string;
  direction: string;
  clue: ClueSeq;
  letters: number;
  releaseDay: number;
  constructor(
    num: string,
    direction: string,
    clue: ClueSeq,
    letters: number,
    releaseDay: number
  ) {
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
export function cellInArray(array: Array<Coord>, cell: Coord): boolean {
  for (var k = 0; k < array.length; k++) {
    const { x, y } = array[k];
    if (x === cell.x && y === cell.y) {
      return true;
    }
  }
  return false;
}

export function cellInClue(clue: ClueSeq, cell: Coord): boolean {
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

export function getWhiteCells(h: number, v: number, blackCells: Array<Coord>) {
  const cells: Array<any> = [];
  const whiteCells: Array<Coord> = [];
  /* Make array of white cells. */
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < v; j++) {
      let blackCell = false;
      for (var k = 0; k < blackCells.length; k++) {
        const bCell = blackCells[k];
        if (bCell.x === i && bCell.y === j) {
          blackCell = true;
        }
      }
      if (!blackCell) {
        whiteCells.push(new Coord(i, j));
      }
      cells.push([i, j, blackCell]);
    }
  }
  return [whiteCells, cells];
}

export type ClueMap = { [key: string]: ClueSeq };
export type AllClues = {
  [AC]: ClueMap;
  [DN]: ClueMap;
};

export function figureOutClues(
  acSquares: number,
  dnSquares: number,
  whiteSquares
): AllClues {
  /* Collect clues and write in numbers */
  var acrossClues: ClueMap = {};
  var downClues: ClueMap = {};
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
    [AC]: acrossClues,
    [DN]: downClues,
  };
}
