import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import burgerBuilder from "./store/reducers/burgerBuilder";

const store = createStore(burgerBuilder);

const app: ReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
