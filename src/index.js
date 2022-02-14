import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import TransactionsProvider from "./context/TransactionsProvider/TransactionsProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
