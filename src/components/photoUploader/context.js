import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const defaultState = {
  image: null,
  setImage: () => {},
  photoPreviewHeight: "100px",
  setPhotoPreviewHeight: () => {}
};

const PhotoUploaderContext = createContext(defaultState);

const usePhotoUploaderContext = () => {
  const context = useContext(PhotoUploaderContext);
  if (context.setImage === defaultState.setImage) {
    throw new Error(
      "usePhotoUploaderContext can only be used within a PhotoUploaderProvider, check if you placed this node on the right place!"
    );
  }
  return context;
};

const PhotoUploaderProvider = ({ children, onImageUpload, width }) => {
  const [image, setImage] = useState(defaultState.image);
  const [photoPreviewHeight, setPhotoPreviewHeight] = useState(
    width || defaultState.photoPreviewHeight
  );

  const providerValue = {
    image,
    setImage,
    photoPreviewHeight,
    setPhotoPreviewHeight
  };

  useEffect(() => onImageUpload(image), [image]);

  return (
    <PhotoUploaderContext.Provider value={providerValue}>
      {children}
    </PhotoUploaderContext.Provider>
  );
};

PhotoUploaderProvider.defaultProps = {
  onImageUpload: () => {},
  width: null
};

PhotoUploaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onImageUpload: PropTypes.func,
  width: PropTypes.string
};

export default PhotoUploaderProvider;
export { PhotoUploaderProvider, usePhotoUploaderContext };
