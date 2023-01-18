import React from 'react';

interface PieceConfig {
  value: string;
}

const Piece = ({ value }: PieceConfig) => {
  return <div id="piece">{value}</div>;
};

export default Piece;
