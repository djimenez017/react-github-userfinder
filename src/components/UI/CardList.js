import React from "react";
import Card from "../UI/Card";

const CardList = (props) => (
  <div id="container" className="mt-10">
    {props.cards.map((card, index) => (
      <Card {...card} key={index} />
    ))}
  </div>
);

export default CardList;
