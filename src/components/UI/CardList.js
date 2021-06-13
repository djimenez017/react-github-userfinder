import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* width: calc(100% / 3); */

  height: auto;
`;

const CardList = (props) => (
  <Container>
    {props.cards.map((card, index) => (
      <Card {...card} key={index} />
    ))}
  </Container>
);

export default CardList;
