import React from "react";
import { v4 as getRandomId } from "uuid";
import NavItem from "./NavItem";
import ProfileLink from "./ProfileLink";
import navLinks from "./navLinks";

const toNavItem = item => <NavItem key={getRandomId()}>{item}</NavItem>;
const items = navLinks.map(toNavItem);

const NavList = () => {
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
