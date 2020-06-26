import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./Container";
import { GlobalProvider } from "./context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <Container />
    </GlobalProvider>
  );
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
