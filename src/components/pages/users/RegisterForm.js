import React, { useState, useEffect } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { Form, Input } from "../../form";
import ProfilePhotoUploader from "./ProfilePhotoUploader";
import Button from "../../Button";

const defaultProfilePictureURL =
  "https://firebasestorage.googleapis.com/v0/b/fb-post-creator.appspot.com/o/profiles-pictures%2Fdefault-profile-picture.jpg?alt=media&token=f82f4d92-2d6e-4720-97d7-3e584dc527db";

const RegisterForm = props => {
  const [formState, setFormState] = useState();
  const [profileImage, setProfileImage] = useState();

  // useEffect(() => console.log(formState), [formState]);
  const { signup } = useUserContext();

  const sendUser = event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = formState;
    const newUser = {
      email,
      password,
      displayName: `${firstName} ${lastName}`,
      photoImage: profileImage
    };
    signup(newUser);
  };

  return (
    <Form
      className="users-form"
      onSubmit={sendUser}
      onStateChange={setFormState}
    >
      <div className="wrapper">
        <label>Nombre completo</label>
        <div className="name-inputs">
          <Input
            type="text"
            placeholder="Introduce tu nombre"
            name="firstName"
          />
          <Input
            type="text"
            placeholder="Introduce tu apellido"
            name="lastName"
          />
        </div>
      </div>
      <div className="wrapper">
        <label>Foto de perfil</label>
        <ProfilePhotoUploader
          onImageUpload={setProfileImage}
          className="profile-photo-uploader"
        />
      </div>
      <div className="wrapper">
        <label>Correo electronico</label>
        <Input
          type="email"
          placeholder="Introduce tu correo electronico"
          name="email"
        />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <Input
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
        />
      </div>
      <div className="wrapper">
        <label>Confirmar contraseña</label>
        <Input
          type="password"
          placeholder="Confirma tu contraseña"
          name="confirmPassword"
        />
      </div>
      <Button type="submit" primary>
        Registrar
      </Button>
    </Form>
  );
};

export default RegisterForm;
