import React, { useState } from "react";
import "./App.css";
import Form from "../src/components/Form";
import CardList from "./components/UI/CardList";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div className="App">
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a Github user
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
