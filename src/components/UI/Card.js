import React from "react";
//import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import H1 from "@material-tailwind/react/Heading6";
import Button from "@material-tailwind/react/Button";
import styled from "styled-components";

const Card = styled.div`
  background: var(--clearColor);
  padding: 10px;
  color: black;
  border-radius: 10px;
  margin: 40px;
  width: 350px;

  p {
    padding: 10px;
  }

  img {
    width: 300px;
    margin: 0 auto;
  }
`;

const StyledRow = styled.div`
  display: flex;

  button {
    margin-left: 10px;
  }

  p {
    color: black;
  }
`;

export default function TheCard(props) {
  return (
    <Card>
      <CardImage src={props.avatar_url} alt={props.name} />

      <CardBody>
        <H1 color="gray">{props.name}</H1>
        <p>
          {props.public_repos} repositories. User since{" "}
          {props.created_at.slice(0, 4)}
          <br />
          {props.location || ""}
          <br />
          {props.bio}
        </p>
      </CardBody>

      <StyledRow>
        <Button color="lightBlue" size="sm" ripple="light">
          <a href={props.html_url}>Github</a>
        </Button>
        <Button color="lightBlue" size="sm" ripple="light">
          <a href={props.blog}>Website</a>
        </Button>
        <Button color="lightBlue" size="sm" ripple="light">
          <a href={`https://twitter.com/${props.twitter_username}`}>Twitter</a>
        </Button>
      </StyledRow>
    </Card>
  );
}
