import { cellInClue, ClueSeq, Coord, AC, DN } from "../utils";

describe("cellInClue", () => {
  describe("Across clues", () => {
    it("should return true for cells within an across clue", () => {
      // Create an across clue starting at (2, 1) with length 5
      const acrossClue = new ClueSeq(2, 1, 5, AC);

      // Test cells that should be in the clue
      expect(cellInClue(acrossClue, new Coord(2, 1))).toBe(true); // start cell
      expect(cellInClue(acrossClue, new Coord(3, 1))).toBe(true); // middle cell
      expect(cellInClue(acrossClue, new Coord(6, 1))).toBe(true); // end cell (2+5-1=6)
    });

    it("should return false for cells outside an across clue horizontally", () => {
      const acrossClue = new ClueSeq(2, 1, 5, AC);

      // Test cells before and after the clue on same row
      expect(cellInClue(acrossClue, new Coord(1, 1))).toBe(false); // before start
      expect(cellInClue(acrossClue, new Coord(7, 1))).toBe(false); // after end
    });

    it("should return false for cells on different rows", () => {
      const acrossClue = new ClueSeq(2, 1, 5, AC);

      // Test cells on different rows
      expect(cellInClue(acrossClue, new Coord(3, 0))).toBe(false); // row above
      expect(cellInClue(acrossClue, new Coord(3, 2))).toBe(false); // row below
    });

    it("should handle single-cell across clue", () => {
      const singleCellClue = new ClueSeq(5, 3, 1, AC);

      expect(cellInClue(singleCellClue, new Coord(5, 3))).toBe(true);
      expect(cellInClue(singleCellClue, new Coord(4, 3))).toBe(false);
      expect(cellInClue(singleCellClue, new Coord(6, 3))).toBe(false);
    });

    it("should handle across clue at origin", () => {
      const originClue = new ClueSeq(0, 0, 3, AC);

      expect(cellInClue(originClue, new Coord(0, 0))).toBe(true);
      expect(cellInClue(originClue, new Coord(1, 0))).toBe(true);
      expect(cellInClue(originClue, new Coord(2, 0))).toBe(true);
      expect(cellInClue(originClue, new Coord(3, 0))).toBe(false);
    });
  });

  describe("Down clues", () => {
    it("should return true for cells within a down clue", () => {
      // Create a down clue starting at (3, 2) with length 4
      const downClue = new ClueSeq(3, 2, 4, DN);

      // Test cells that should be in the clue
      expect(cellInClue(downClue, new Coord(3, 2))).toBe(true); // start cell
      expect(cellInClue(downClue, new Coord(3, 3))).toBe(true); // middle cell
      expect(cellInClue(downClue, new Coord(3, 5))).toBe(true); // end cell (2+4-1=5)
    });

    it("should return false for cells outside a down clue vertically", () => {
      const downClue = new ClueSeq(3, 2, 4, DN);

      // Test cells before and after the clue on same column
      expect(cellInClue(downClue, new Coord(3, 1))).toBe(false); // before start
      expect(cellInClue(downClue, new Coord(3, 6))).toBe(false); // after end
    });

    it("should return false for cells on different columns", () => {
      const downClue = new ClueSeq(3, 2, 4, DN);

      // Test cells on different columns
      expect(cellInClue(downClue, new Coord(2, 3))).toBe(false); // column left
      expect(cellInClue(downClue, new Coord(4, 3))).toBe(false); // column right
    });

    it("should handle single-cell down clue", () => {
      const singleCellClue = new ClueSeq(7, 1, 1, DN);

      expect(cellInClue(singleCellClue, new Coord(7, 1))).toBe(true);
      expect(cellInClue(singleCellClue, new Coord(7, 0))).toBe(false);
      expect(cellInClue(singleCellClue, new Coord(7, 2))).toBe(false);
    });

    it("should handle down clue at origin", () => {
      const originClue = new ClueSeq(0, 0, 3, DN);

      expect(cellInClue(originClue, new Coord(0, 0))).toBe(true);
      expect(cellInClue(originClue, new Coord(0, 1))).toBe(true);
      expect(cellInClue(originClue, new Coord(0, 2))).toBe(true);
      expect(cellInClue(originClue, new Coord(0, 3))).toBe(false);
    });
  });

  describe("Edge cases", () => {
    it("should handle clues with zero length", () => {
      const zeroLengthAcross = new ClueSeq(1, 1, 0, AC);
      const zeroLengthDown = new ClueSeq(1, 1, 0, DN);

      expect(cellInClue(zeroLengthAcross, new Coord(1, 1))).toBe(false);
      expect(cellInClue(zeroLengthDown, new Coord(1, 1))).toBe(false);
    });

    it("should handle large coordinates", () => {
      const largeClue = new ClueSeq(100, 200, 5, AC);

      expect(cellInClue(largeClue, new Coord(102, 200))).toBe(true);
      expect(cellInClue(largeClue, new Coord(102, 199))).toBe(false);
    });

    it("should handle negative coordinates", () => {
      // Note: This might not be a realistic scenario, but testing robustness
      const negativeClue = new ClueSeq(-2, -1, 3, AC);

      expect(cellInClue(negativeClue, new Coord(-2, -1))).toBe(true);
      expect(cellInClue(negativeClue, new Coord(-1, -1))).toBe(true);
      expect(cellInClue(negativeClue, new Coord(0, -1))).toBe(true);
      expect(cellInClue(negativeClue, new Coord(1, -1))).toBe(false);
    });
  });

  describe("Type consistency", () => {
    it("should work with cells created using different methods", () => {
      const clue = new ClueSeq(1, 1, 3, AC);

      // Test with new Coord constructor
      const coord1 = new Coord(2, 1);
      expect(cellInClue(clue, coord1)).toBe(true);

      // Test with object literal (if Coord interface allows it)
      const coord2 = { x: 2, y: 1 } as Coord;
      expect(cellInClue(clue, coord2)).toBe(true);
    });
  });
});
