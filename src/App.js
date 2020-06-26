import React, { useState, createContext, Fragment } from "react";
import { Provider } from "./context";
import SearchBar from "./components/searchBar/SearchBar";
import Home from "./components/pages/home/Home";
import "./App.css";

const App = () => {
  const user = {
    name: { first: "Georgelyz", last: "Martinez" },
    photo: "img/test.jpg"
  };
  const postState = useState([]);
  const searchQueryState = useState("");

  return (
    <Provider value={{ user, postState, searchQueryState }}>
      <SearchBar />
      <Home />
    </Provider>
  );
};

/* 
{value => {
          return (
            <Fragment>
              <SearchBar />
              <Home />
            </Fragment>
          );
        }}
*/
export default App;
