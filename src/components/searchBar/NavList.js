import React from "react";
import { v4 as getRandomId } from "uuid";
import ProfileLink from "./ProfileLink";
import { useUserContext } from "../../contexts/UserContext";

const NavList = () => {
  const { user, logout } = useUserContext();

  return (
    <nav>
      <ul>
        <ProfileLink key={getRandomId()} user={user} />
        <li key={getRandomId()}>
          <a href="#" onClick={logout}>
            Salir
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
