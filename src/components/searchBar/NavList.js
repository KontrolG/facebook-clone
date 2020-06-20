import React from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import NavLink from "./NavLink";

const toLinkItem = item => <NavLink>{item}</NavLink>;

const NavList = () => {
  const items = ["Inicio", "Crear"].map(toLinkItem);

  return (
    <nav>
      <ul>
        <NavLink className="profile-link">
          <ProfilePhotoMiniature />
          <span>Georgelyz</span>
        </NavLink>
        {items}
      </ul>
    </nav>
  );
};

export default NavList;
