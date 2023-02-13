import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import './antd/dist/antd.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SupportToggleProvider } from "./ContextApi/supportToogleContext";
// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers/combinedReducers";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
