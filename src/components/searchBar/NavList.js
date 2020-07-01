import React from "react";
import { v4 as getRandomId } from "uuid";
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

const toLinkItem = item => <NavLink key={getRandomId()}>{item}</NavLink>;

const NavList = () => {
  const items = ["Inicio", "Crear"].map(toLinkItem);

  return (
    <nav>
      <ul>
        <ProfileLink key={getRandomId()} />
        {items}
      </ul>
    </nav>
  );
};

export default NavList;
