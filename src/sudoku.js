// function Grid(columnLength) {
//   this.column1 = columnLength;
//   this.column2 = columnLength;
//   this.column3 = columnLength;
//   this.column4 = columnLength;
//   this.column5 = columnLength;
//   this.column6 = columnLength;
//   this.column7 = columnLength;
//   this.column8 = columnLength;
//   this.column9 = columnLength;
// }

// function Grid(rowLength) {
//   this.row1 = rowLength;
//   this.row2 = rowLength;
//   this.row3 = rowLength;
//   this.row4 = rowLength;
//   this.row5 = rowLength;
//   this.row6 = rowLength;
//   this.row7 = rowLength;
//   this.row8 = rowLength;
//   this.row9 = rowLength;
// }

// Grid.prototype.checkNumber = function () {
//   for (let values of Object.values(grid)) {

//   }
// }


// export function boardChecker(board) {
//   for(var i= 1; i <= 9; i++) {
//     if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9) {
//       return true;
//     }
//   }

export const checkSudoku = board => {
  const isSudokuArrayValid = (array) => {
    const row = array.slice(0).sort().join(''),
      passingRow = [1,2,3,4,5,6,7,8,9].join('');

    return (row === passingRow);
  };

  const testRows = (board) => board.every(row => isSudokuArrayValid(row));

  const testColumns = (board) => {
    const gatherColumn = (board, columnNum) => board.reduce((total, row) => [...total, row[columnNum]], []);
    return [0, 1, 2, 3, 4, 5, 6, 7,  8].every(i => isSudokuArrayValid(gatherColumn(board, i)));
  }
}
const completeBoard = checkSudoku([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);


