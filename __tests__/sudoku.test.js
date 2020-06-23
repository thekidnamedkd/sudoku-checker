import { Grid } from "./../sudoku.js";

describe('Grid', () => {

  test('should correctly determine if a box holds a number', () => {
    let grid = new Grid(5);
    expect(grid.column1).toEqual(5);
  });
});