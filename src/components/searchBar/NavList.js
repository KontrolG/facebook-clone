import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/users/login" onClick={logout}>
            Salir
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
