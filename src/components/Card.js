import React from 'react';

function Card(props) {
  return (
    <div className="Card" onClick={props.onClick}>
      <img src={props.src} alt=""></img>
      <p>{props.name}</p>
    </div>
  );
};

export default Card;