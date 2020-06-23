export function Grid(columnLength) {
  this.column1 = columnLength;
  this.column2 = columnLength;
  this.column3 = columnLength;
  this.column4 = columnLength;
  this.column5 = columnLength;
  this.column6 = columnLength;
  this.column7 = columnLength;
  this.column8 = columnLength;
  this.column9 = columnLength;
}

export function Grid(rowLength) {
  this.row1 = rowLength;
  this.row2 = rowLength;
  this.row3 = rowLength;
  this.row4 = rowLength;
  this.row5 = rowLength;
  this.row6 = rowLength;
  this.row7 = rowLength;
  this.row8 = rowLength;
  this.row9 = rowLength;
}

Grid.prototype.checkNumber = function () {
  for (let values of Object.values(grid)) {
    
  }
}