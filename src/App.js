import React, { useState } from "react";
import Form from "../src/components/Form";
import CardList from "./components/UI/CardList";
import "@material-tailwind/react/tailwind.css";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .SearchBar {
    padding: 20px;
  }

  .FormContainer {
    display: flex;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-weight: bolder;
    margin-bottom: 20px;
    font-family: "Staatliches", cursive;
    font-size: 40px;
  }
`;

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <Container>
      <div className="SearchBar">
        <h1>Search a Github user</h1>
        <Form onSubmit={addNewCard} />
        <CardList cards={cards} />
      </div>
    </Container>
  );
};

export default App;
