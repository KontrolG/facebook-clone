import React from "react";
import { Consumer } from "../../context";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import NavItem from "./NavItem";

const ProfileLink = () => (
  <Consumer>{renderProfileLinkFromContextUser}</Consumer>
);

const renderProfileLinkFromContextUser = ({ user }) => (
  <NavItem className="profile-link">
    <ProfilePhotoMiniature userPhotoSrc={user.photo} />
    <span>{user.name.first}</span>
  </NavItem>
);

export default ProfileLink;
