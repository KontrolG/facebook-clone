import React from "react";
import { Input, ErrorMessage } from "../../form";

const DisplayNameField = props => {
  return (
    <div className="wrapper">
      <label htmlFor="firstName">Nombre completo</label>
      <div className="name-inputs">
        <Input type="text" placeholder="Introduce tu nombre" name="firstName" />
        <Input
          type="text"
          placeholder="Introduce tu apellido"
          name="lastName"
        />
      </div>
      <p className="form-error-message">
        {<ErrorMessage fieldName="lastName" /> || (
          <ErrorMessage fieldName="firstName" />
        )}
      </p>
    </div>
  );
};

export default DisplayNameField;
