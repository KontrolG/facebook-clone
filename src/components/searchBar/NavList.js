import React from "react";
import ProfileLink from "./ProfileLink";
import Button from "../Button";
import { useUserContext } from "../../contexts/UserContext";

const NavList = () => {
  const { user, logout } = useUserContext();

  return (
    <nav>
      <ul>
        <ProfileLink key="user-profile-link-list-item" user={user} />
        <li key="logout-button-list-item">
          <Button className="logout-button" onClick={logout}>
            Salir
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
