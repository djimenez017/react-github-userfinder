import React from "react";
import Input from "@material-tailwind/react/Input";

export default function TheInput(props) {
  return (
    <Input
      type="text"
      color="gray"
      size="sm"
      outline={true}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required
    />
  );
}
