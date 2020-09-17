import React, { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import Storage from "../../../firebase-utils/storageModel";
import getFileExtension from "../../../utils/getFileExtension";
import { Form } from "../../form";
import FormField from "./FormField";
import ProfilePhotoUploader from "./ProfilePhotoUploader";
import Button from "../../Button";
import DisplayNameField from "./DisplayNameField";

const defaultProfilePictureURL =
  "https://firebasestorage.googleapis.com/v0/b/fb-post-creator.appspot.com/o/profiles-pictures%2Fdefault-profile-picture.jpg?alt=media&token=f82f4d92-2d6e-4720-97d7-3e584dc527db";

const getProfilePhotoURL = async (userId, photoImage) => {
  if (!photoImage) {
    return defaultProfilePictureURL;
  }
  const photoImageExtension = getFileExtension(photoImage.name);
  const { url } = await Storage.saveFile(
    `profile-photos/${userId}.${photoImageExtension}`,
    photoImage
  );
  return url;
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

const RegisterForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const { createUser, updateCurrentUserProfile } = useUserContext();

  const validatePassword = (password, confirmPassword) => {
    setRegisterError(null);
    if (password !== confirmPassword) {
      return setRegisterError("Las contraseñas no coinciden");
    }
    return true;
  };

  const signup = async ({ email, password, firstName, lastName }) => {
    const { uid } = await createUser(email, password);
    const photoURL = await getProfilePhotoURL(uid, profileImage);

    return updateCurrentUserProfile({
      displayName: `${firstName} ${lastName}`,
      photoURL
    });
  };

  const registerUser = async newUser => {
    const { password, confirmPassword } = newUser;
    if (!validatePassword(password, confirmPassword)) return;

    try {
      await signup(newUser);
    } catch (error) {
      setRegisterError(error);
    }
  };

  return (
    <Form
      className="users-form"
      onSubmit={registerUser}
      validate={formValidation}
    >
      <DisplayNameField />
      <ProfilePhotoUploader
        defaultProfilePictureURL={defaultProfilePictureURL}
        onImageUpload={setProfileImage}
      />
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
      <p className="form-error-message users-error">
        {registerError ? registerError.message : null}
      </p>
      <Button type="submit" primary>
        Registrar
      </Button>
    </Form>
  );
};

export default RegisterForm;
