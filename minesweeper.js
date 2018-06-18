const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board= [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push (' ');
    }
    board.push(row);
  }
  return board;
};
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
const board = [];
}
//continue with Part 14
