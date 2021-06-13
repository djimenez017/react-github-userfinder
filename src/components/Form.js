import React, { useState } from "react";
import axios from "axios";
import Button from "../components/UI/Button";
import Input from "./UI/Input";
import styled from "styled-components";

const FormContainer = styled.form`
  margin-bottom: 40px;

  .form-fields {
    width: 60%;
    display: flex;
    margin: 0 auto;
  }
`;

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
    <FormContainer onSubmit={clickHandler}>
      <div className="form-fields">
        <Input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Github username"
        />
        <Button type={"submit"}>Search</Button>
      </div>
    </FormContainer>
  );
};

export default Form;
