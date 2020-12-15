import React from 'react';

function Header(props) {
  return (
    <div className="Header">
      <h1>Memory Card Game</h1>
      <div className="Score">Score: {props.score}</div>
      <div className="Score">High Score: {props.highscore}</div>
    </div>
  );
};

export default Header;