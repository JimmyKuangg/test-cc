import React from 'react';

interface BoardConfig {
  board: Array<Array<null>>;
}

const Board = ({ board }: BoardConfig) => {
  const rows = board.map((sub) => <div className="board-row">{sub}</div>);

  return <div id="board">{rows}</div>;
};

export default Board;
