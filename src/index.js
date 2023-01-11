import React from "react";
import { AppProvider } from "./context/appContext";
import ReactDOM from "react-dom/client";
import "normalize.css"; // always import it before the index.css.
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
