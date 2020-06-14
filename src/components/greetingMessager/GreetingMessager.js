import React, { useState, useEffect, lazy, Suspense } from "react";
import Form from "./Form";
import Message from "./Message";
import "./style.css";

const People = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import("./People");
});

const GreetingMessager = () => {
  const [name, setName] = useState("World");
  const [previousName, setPreviousName] = useState("");
  const [displayMsg, setDisplayMsg] = useState(false);
  const [people, setPeople] = useState([name]);
  useEffect(() => void setTimeout(setDisplayMsg, 3000, false));

  const formProps = {
    name,
    setName,
    setPreviousName,
    setDisplayMsg,
    people,
    setPeople
  };

  return (
    <main>
      <Message {...{ name, previousName, displayMsg }} />
      <Form {...formProps} />
      <Suspense fallback={<p>Loading...</p>}>
        <People>{people}</People>
      </Suspense>
    </main>
  );
};

export default GreetingMessager;
