import React from "react";
import { Input } from "../../form";
import { PhotoUploader, PhotoPreview, UploadButton } from "../../photoUploader";
import Button from "../../Button";

const imageFileTypes = "image/*,image/heif,image/heic";

const defaultProfilePictureURL =
  "https://firebasestorage.googleapis.com/v0/b/fb-post-creator.appspot.com/o/profiles-pictures%2Fdefault-profile-picture.jpg?alt=media&token=f82f4d92-2d6e-4720-97d7-3e584dc527db";

const renderUploadButtonChildren = (clickInput, inputRef) => {
  return (
    <>
      <Button onClick={clickInput} fullWidth primary>
        Cambiar
      </Button>
      <Input
        type="file"
        accept={imageFileTypes}
        name="profile-photo"
        ref={inputRef}
        hidden
      />
    </>
  );
};

const ProfilePhotoUploader = ({ onImageUpload, className }) => {
  return (
    <PhotoUploader
      onImageUpload={onImageUpload}
      width="150px"
      className={className}
    >
      <PhotoPreview
        defaultImageURL={"img/test.jpg" /* defaultProfilePictureURL */}
        rounded
      />
      <UploadButton children={renderUploadButtonChildren} overlapping />
    </PhotoUploader>
  );
};

export default ProfilePhotoUploader;
