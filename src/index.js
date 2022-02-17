import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import TransactionsProvider from "./context/TransactionsProvider";
import CategoriesProvider from "./context/CategoriesProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TransactionsProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </TransactionsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
