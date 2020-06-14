import React, { useState } from "react";
import NameSetterInput from "./NameSetterInput";

const Form = ({
  name,
  setName,
  setPreviousName,
  setDisplayMsg,
  people,
  setPeople
}) => {
  const [inputValue, setValue] = useState("");
  const changeName = event => {
    event.preventDefault();
    setPreviousName(name);
    setName(inputValue);
    setDisplayMsg(true);
    setPeople([...people, inputValue]);
  };

  return (
    <form onSubmit={changeName}>
      <NameSetterInput setValue={setValue} />
      <button type="submit">Change</button>
    </form>
  );
};

export default Form;
