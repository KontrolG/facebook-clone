import React from "react";

const NameSetterInput = ({ setValue }) => (
  <input
    placeholder="Introduce tu nombre"
    onChange={({ target }) => setValue(target.value)}
  />
);

export default NameSetterInput;
