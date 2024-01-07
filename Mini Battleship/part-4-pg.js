 let boardSize = 5;

function createBoard(test) {
    const board = [];
    for(let i = 0; i < boardSize; i++) {
      board.push(Array(boardSize).fill(test))
    }
    return board;
  }

const playerBoard = createBoard('false');
const compBoard = createBoard('true');

console.log(playerBoard);
console.log(compBoard);




