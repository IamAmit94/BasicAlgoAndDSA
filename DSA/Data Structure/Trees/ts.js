// Tic Tac Toe game implementation in JavaScript

// Initialize game variables
let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to print the current state of the board
function printBoard() {
  console.log(board[0].join(' | '));
  console.log('-'.repeat(5));
  console.log(board[1].join(' | '));
  console.log('-'.repeat(5));
  console.log(board[2].join(' | '));
}

// Function to check if the current move is valid
function isValidMove(row, col) {
  return board[row][col] === '';
}

// Function to check if the game has been won
function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }
  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      return true;
    }
  }
  // Check diagonals
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
  return false;
}

// Function to check if the game is a draw
function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}

// Function to handle player's move
function playMove(row, col) {
  if (isValidMove(row, col)) {
    board[row][col] = currentPlayer;
    printBoard();
    if (checkWin()) {
      console.log(`Player ${currentPlayer} wins!`);
    } else if (checkDraw()) {
      console.log('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      console.log(`Next move: Player ${currentPlayer}`);
    }
  } else {
    console.log('Invalid move! Try again.');
  }
}

// Sample gameplay
console.log('Welcome to Tic Tac Toe!');
printBoard();
console.log(`Player ${currentPlayer} starts.`);

// Sample moves
playMove(0, 0); // Player X moves
playMove(1, 1); // Player O moves
playMove(0, 1); // Player X moves
playMove(0, 2); // Player O moves
playMove(2, 2); // Player X moves
playMove(1, 2); // Player O moves
playMove(1, 0); // Player X moves
playMove(2, 0); // Player O moves
playMove(2, 1); // Player X moves
