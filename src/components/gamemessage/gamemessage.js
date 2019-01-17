import React from "react";

const GameMessage = props => {
  return (
    <div className="backdrop" onClick={() => props.resetClicked()}>
      <p>GAME OVER</p>
      <p className="refresh-text">CLICK TO REFRESH</p>
    </div>
  );
};

export default GameMessage;
