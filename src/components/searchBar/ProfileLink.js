import React from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import NavItem from "./NavItem";

const ProfileLink = ({ user }) => (
  <NavItem className="profile-link">
    <ProfilePhotoMiniature userPhotoSrc={user.photo} />
    <span>{user.name.first}</span>
  </NavItem>
);

export default ProfileLink;
