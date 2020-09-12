import React, { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { Form } from "../../form";
import FormField from "./FormField";
import ProfilePhotoUploader from "./ProfilePhotoUploader";
import Button from "../../Button";
import DisplayNameField from "./DisplayNameField";

const RegisterForm = () => {
  const [, setProfileImage] = useState();

  const sendUser = newUser => {
    // const newUser = {
    //   email,
    //   password,
    //   displayName: `${firstName} ${lastName}`,
    //   photoImage: profileImage
    // };
    console.log(newUser);
    // signup(newUser);
  };

  const formValidation = {
    firstName: {
      isRequired: "Debes introducir tu nombre"
    },
    lastName: {
      isRequired: "Debes introducir tu apellido"
    },
    email: {
      isEmail: "Debes introducir un correo electrónico"
    },
    password: {
      isLength: {
        min: 6,
        max: 20,
        message: "Debes introducir una contraseña con entre 6 a 20 caracteres"
      }
    },
    confirmPassword: {
      isRequired: "Debes confirmar tu contraseña"
    }
  };

  return (
    <Form className="users-form" onSubmit={sendUser} validate={formValidation}>
      <DisplayNameField />
      <ProfilePhotoUploader onImageUpload={setProfileImage} />
      <FormField
        labelText="Correo electrónico"
        type="email"
        placeholder="Introduce tu correo electrónico"
        name="email"
      />
      <FormField
        labelText="Contraseña"
        type="password"
        placeholder="Introduce tu contraseña"
        name="password"
      />
      <FormField
        labelText="Confirmar contraseña"
        type="password"
        placeholder="Confirma tu contraseña"
        name="confirmPassword"
      />
      <Button type="submit" primary>
        Registrar
      </Button>
    </Form>
  );
};

export default RegisterForm;
