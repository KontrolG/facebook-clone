import React from "react";
import ProfilePhotoMiniature from "./ProfilePhotoMiniature";

const toListItem = (item, index) => (
  <li key={index + 1}>
    <a href="#">{item}</a>
  </li>
);
const items = ["Inicio", "Crear"].map(toListItem);
const NavList = () => (
  <nav>
    <ul>
      <li key="0">
        <a href="#" className="profile-link">
          <ProfilePhotoMiniature />
          <span>Georgelyz</span>
        </a>
      </li>
      {items}
    </ul>
  </nav>
);

export default NavList;
