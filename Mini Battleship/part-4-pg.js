//  let boardSize = 5;

// function createBoard(test) {
//     const board = [];
//     for(let i = 0; i < boardSize; i++) {
//       board.push(Array(boardSize).fill(test))
//     }
//     return board;
//   }

// const playerBoard = createBoard(false);
// const compBoard = createBoard(true);

// function modifyBoard(board, num1, num2) {
//   board[num1][num2] = true;
// }

// modifyBoard(playerBoard, 0, 0);

// console.log(playerBoard);
// console.log(compBoard);



  // Generate random attack(location)
  // add attack to compPastAttacks; 
  // if hit -> display to user they've been hit -> create function to hit +1 to either row or col from previous attack
  // until ship has sunk 
  // if miss -> display to user computer missed -> and bring up User's turn  

let compPastAttacks = [[1,2], [0,0]]
let playerShipsRemain = 3
const boardSize = 5;

function compAttack() {

  while(playerShipsRemain > 0) {
    let col, row;
    do 
    {
    row = Math.floor(Math.random() * boardSize);
    col = Math.floor(Math.random() * boardSize);
    } while (!compPastAttacks.some(pos => pos[0] === row && pos[1] === col));
  }
  compPastAttacks.push([row, col]);
  --playerShipsRemain;
  console.log(compPastAttacks)
}

compAttack();





