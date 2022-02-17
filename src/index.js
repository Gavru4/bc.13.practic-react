import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import TransactionsProvider from "./context/TransactionsProvider";
import CategoriesProvider from "./context/CategoriesProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionsProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </TransactionsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
