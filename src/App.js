import React, { useState } from "react";
import { Provider } from "./context";
import SearchBar from "./components/searchBar/SearchBar";
import Home from "./components/pages/home/Home";
import "./App.css";

const App = () => {
  const user = {
    name: { first: "Georgelyz", last: "Martinez" },
    photo: "img/test.jpg"
  };
  const testPost = {
    _id: 1,
    user: {
      name: { first: "Georgelyz", last: "Martinez" },
      photo: "img/test.jpg"
    },
    text: "¿Por que eres tan intenso tiee?",
    createAt: new Date("2020-06-28")
  };
  const postState = useState([testPost]);
  const searchQueryState = useState("");

  return (
    <Provider value={{ user, postState, searchQueryState }}>
      <SearchBar />
      <Home />
    </Provider>
  );
};

export default App;
