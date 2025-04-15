import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? "🐘" : "🦒";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="safari-container">
      <h1 className="safari-title">Safari Tic Tac Toe</h1>
      <div className="safari-status">
        {winner ? `Winner: ${winner}` : `Next: ${xIsNext ? "🐘" : "🦒"}`}
      </div>
      <div className="safari-board">
        {squares.map((val, index) => (
          <button
            key={index}
            className="safari-square"
            onClick={() => handleClick(index)}
          >
            {val}
          </button>
        ))}
      </div>
      <button className="safari-reset" onClick={resetGame}>
        🦓 Play Again
      </button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
