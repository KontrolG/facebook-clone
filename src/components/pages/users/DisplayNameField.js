import React from "react";
import { Input, useFormErrors } from "../../form";

const DisplayNameField = props => {
  const { errors } = useFormErrors();

  const firstNameError = errors?.firstName?.[0]?.message;
  const lastNameError = errors?.lastName?.[0]?.message;

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
        {firstNameError || lastNameError || null}
      </p>
    </div>
  );
};

export default DisplayNameField;
