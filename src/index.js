import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header/Header";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Header />
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
