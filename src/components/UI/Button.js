import React from "react";
import Button from "@material-tailwind/react/Button";

export default function TheButton(props) {
  return (
    <Button
      color="red"
      buttonType="filled"
      size="SM"
      rounded={false}
      block={false}
      iconOnly={false}
      ripple="light"
      type={props.type}
    >
      Search
    </Button>
  );
}
