import React from "react";

const toListItem = (item, index) => (
  <li key={index}>
    <a href="#">{item}</a>
  </li>
);
const items = ["Georgelyz", "Inicio", "Crear"].map(toListItem);
const NavList = () => (
  <nav>
    <ul>{items}</ul>
  </nav>
);

export default NavList;
