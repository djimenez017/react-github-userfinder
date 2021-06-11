import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Form from "../src/components/Form";
import CardList from "./components/UI/CardList";

const GlobalStyles = createGlobalStyle`
  html {
  --clearColor: #dddddd;
  --darkColor: #222831;
  --blue: #30475e;
  --accentColor: #f05454;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  background: var(--darkColor);
  color: var(--clearColor);
  width:100%;
  text-align: center;
  height: 100vh;
  display: flex;
  }
`;

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div>
      <GlobalStyles />
      <h1>Search a Github user</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
