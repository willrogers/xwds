import { AC, DN } from "./xwd_utils";

export class Coord {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  equals(other: Coord): boolean {
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
  direction: string;
  constructor(x: number, y: number, length: number, direction: string) {
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
