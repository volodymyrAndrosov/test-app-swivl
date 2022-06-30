import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import "./styles/pagination/index.scss";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "../src/state/reducers/index";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
