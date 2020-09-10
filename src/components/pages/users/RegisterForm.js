import React from "react";
import { v4 as getRandomId } from "uuid";
import useForm from "../../../hooks/useForm";
import { useUserContext } from "../../../contexts/UserContext";
import Button from "../../Button";

const defaultProfilePictureURL =
  "https://firebasestorage.googleapis.com/v0/b/fb-post-creator.appspot.com/o/profiles-pictures%2Fdefault-profile-picture.jpg?alt=media&token=f82f4d92-2d6e-4720-97d7-3e584dc527db";

const RegisterForm = props => {
  const [formState, changeFieldValue] = useForm(
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword"
  );

  const { signup } = useUserContext();

  const sendUser = event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = formState;
    const newUser = {
      email,
      password,
      displayName: `${firstName} ${lastName}`,
      photoURL: defaultProfilePictureURL
    };
    signup(newUser);
  };

  return (
    <form className="users-form" onSubmit={sendUser}>
      <div className="wrapper">
        <label>Nombre completo</label>
        <div className="name-inputs">
          <input
            type="text"
            placeholder="Introduce tu nombre"
            name="firstName"
            value={formState.firstName}
            onChange={changeFieldValue}
          />
          <input
            type="text"
            placeholder="Introduce tu apellido"
            name="lastName"
            value={formState.lastName}
            onChange={changeFieldValue}
          />
        </div>
      </div>
      <div className="wrapper">
        <label>Correo electronico</label>
        <input
          type="email"
          placeholder="Introduce tu correo electronico"
          name="email"
          value={formState.email}
          onChange={changeFieldValue}
        />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
          value={formState.password}
          onChange={changeFieldValue}
        />
      </div>
      <div className="wrapper">
        <label>Confirmar contraseña</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          name="confirmPassword"
          value={formState.confirmPassWord}
          onChange={changeFieldValue}
        />
      </div>
      <Button type="submit" primary>
        Registrar
      </Button>
    </form>
  );
};

export default RegisterForm;
