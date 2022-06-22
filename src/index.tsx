import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Window } from "./Window";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>
);
