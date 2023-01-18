import { React, useState } from 'react';
import Piece from './components/Piece.tsx';
import Board from './components/Board.tsx';

const numConnected = (row, col, board, piece) => {
  const deltaConnects = {};
  const deltas = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let delta of deltas) {
    const [rowMod, colMod] = delta;
    const key = `${rowMod}, ${colMod}`;
    deltaConnects[key] = 1;

    let newRow = row + rowMod;
    let newCol = col + colMod;
    let rowInBound = 0 <= newRow && newRow < board.length;
    let colInBound = 0 <= newCol && newCol < board[0].length;

    while (rowInBound && colInBound && board[newRow][newCol] === piece) {
      deltaConnects[key] += 1;
      newRow += rowMod;
      newCol += colMod;
      rowInBound = 0 <= newRow && newRow < board.length;
      colInBound = 0 <= newCol && newCol < board[0].length;
    }
  }

  return deltaConnects;
};

const willBreak = (row, col, board, piece) => {
  console.log(numConnected(row, col, board, piece));
  return false;
};

const generateBoard = () => {
  const pieces = ['A', 'B', 'C', 'D', 'E', 'F'];
  const board = Array(9)
    .fill(0)
    .map((sub) => Array(9).fill(0));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let choice = Math.floor(Math.random() * pieces.length);
      while (willBreak(i, j, board, 1, pieces[choice])) {
        console.log('yeehaw');
        choice = (choice + 1) % 4;
      }
      board[i][j] = pieces[choice];
    }
  }

  return board;
};

function App() {
  const [board, setBoard] = useState(generateBoard());
  return (
    <>
      <Board board={board}></Board>
    </>
  );
}

export default App;
