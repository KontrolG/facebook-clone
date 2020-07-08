import React, { createRef } from "react";

const FormOptions = ({ mediaFileInputId }) => {
  return (
    <ul className="form-options">
      <li>
        <label htmlFor={mediaFileInputId}>Foto/vídeo</label>
      </li>
      <li>
        <button type="button">Sentimiento/actividad</button>
      </li>
      <li>
        <button type="button">Etiquetar amigos</button>
      </li>
    </ul>
  );
};

export default FormOptions;
