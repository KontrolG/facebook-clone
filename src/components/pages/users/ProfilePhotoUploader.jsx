import React from "react";
import { PhotoUploader, PhotoPreview, UploadButton } from "../../photoUploader";
import Button from "../../Button";

const imageFileTypes = "image/*,image/heif,image/heic";

const renderUploadButtonChildren = (clickInput, restartInput) => {
  return (
    <>
      <Button onClick={clickInput} fullWidth primary>
        Cambiar
      </Button>
      <Button
        onClick={restartInput}
        fullWidth
        className="restart-profile-photo"
      >
        Eliminar
      </Button>
    </>
  );
};

const ProfilePhotoUploader = ({ defaultProfilePictureURL, onImageUpload }) => {
  return (
    <div className="wrapper">
      <label>Foto de perfil</label>
      <PhotoUploader
        onImageUpload={onImageUpload}
        width="150px"
        className="profile-photo-uploader"
      >
        <PhotoPreview defaultImageURL={defaultProfilePictureURL} rounded />
        <UploadButton
          children={renderUploadButtonChildren}
          overlapping
          imageFileTypes={imageFileTypes}
        />
      </PhotoUploader>
    </div>
  );
};

export default ProfilePhotoUploader;
