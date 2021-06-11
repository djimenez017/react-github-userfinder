import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [username, setUsername] = useState("");

  const clickHandler = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      props.onSubmit(response.data);
      setUsername("");
    });
  };

  return (
    <form onSubmit={clickHandler}>
      <div>
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
          placeholder="Github username"
          required
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Form;
