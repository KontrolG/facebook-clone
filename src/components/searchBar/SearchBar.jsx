import React from "react";
import SearchForm from "./SearchForm";
import NavList from "./NavList";

const SearchBar = () => {
  return (
    <header className="search">
      <SearchForm />
      <NavList />
    </header>
  );
};

export default SearchBar;
