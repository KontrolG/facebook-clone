import React from "react";
import { v4 as getRandomId } from "uuid";
import ProfileLink from "./ProfileLink";
import Button from "../Button";
import { useUserContext } from "../../contexts/UserContext";

const NavList = () => {
  const { user, logout } = useUserContext();

  return (
    <nav>
      <ul>
        <ProfileLink key={getRandomId()} user={user} />
        <li key={getRandomId()}>
          <Button className="logout-button" onClick={logout}>
            Salir
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
