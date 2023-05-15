import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 라우터
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

// 스토어
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
