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
  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++)  {
      row.push(null);
    }
    board.push(row);
}

  let numberOfBombsPlaced = 0;
  
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B' ;
    numberOfBombsPlaced++;
  }
  return board;
};

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
// bombBoard will sometimes have less bombs than specified due to the previously-mentioned missing code.
// Additionally, printing bombBoard will not look clean due to use of null instead of ' ' - this should just be for debugging, not presentation.
printBoard(bombBoard);
