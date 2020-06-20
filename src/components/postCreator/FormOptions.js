import React, { createRef } from "react";

const FormOptions = () => {
  const mediaInputRef = createRef();
  const acceptedFilesTypes =
    "image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska";
  const getFiles = event => {
    console.dir(event.target.files);
  };
  return (
    <ul className="form-options">
      <li>
        <label htmlFor="media-input">Foto/vídeo</label>
        <input
          id="media-input"
          multiple
          type="file"
          accept={acceptedFilesTypes}
          ref={mediaInputRef}
          onChange={getFiles}
        />
      </li>
      <li>
        <button>Sentimiento/actividad</button>
      </li>
      <li>
        <button>Etiquetar amigos</button>
      </li>
    </ul>
  );
};

export default FormOptions;
