import { Grid } from "./../sudoku.js";

describe('Grid', () => {

  test('should correctly determine if a box holds a number', () => {
    let grid = new Grid(5);
    expect(grid.column).toEqual(5);
  });

  test('numbers should not duplicate in rows', () => {
    let row = new row[1,2,3,4,5,6,7,8,9]
    expect(grid.row).toEqual();
  });
    
    test('numbers should not duplicate in columns', () => {
  let column = new column[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]
  });
  test('numbers should not duplicate in a subgrid', () => {
    let subgrid = new subgrid[1, 2, 3,
                              4, 5, 6,
                              7, 8, 9]
  });
});


