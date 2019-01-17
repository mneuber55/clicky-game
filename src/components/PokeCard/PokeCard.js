import React from "react";
import "./PokeCard.css";

const PokeCard = props => (
  <div className="card" id={props.id} name={props.name} onClick={props.onClick}>
    <div className="img-container" id={props.id} name={props.name}>
      <img alt={props.name} src={props.image} id={props.id} name={props.name}/>
    </div>
  </div>
);

export default PokeCard;