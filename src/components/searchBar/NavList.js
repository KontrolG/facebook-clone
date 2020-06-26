import React from "react";
import { Consumer } from "../../context";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import NavLink from "./NavLink";

const ProfileLink = () => (
  <Consumer>{renderProfileLinkFromContextUser}</Consumer>
);

const renderProfileLinkFromContextUser = ({ user }) => (
  <NavLink className="profile-link">
    <ProfilePhotoMiniature userPhotoSrc={user.photo} />
    <span>{user.name.first}</span>
  </NavLink>
);

const toLinkItem = item => <NavLink>{item}</NavLink>;

const NavList = () => {
  const items = ["Inicio", "Crear"].map(toLinkItem);

  return (
    <nav>
      <ul>
        <ProfileLink />
        {items}
      </ul>
    </nav>
  );
};

export default NavList;
