import React from "react";
import "./Hover.css";

import vector from "./Vector1.png";
import cerveza from "./cerveza.png";

export const Hover = () => {
  return (
    <div className="contenedor__hov">
      <img src={vector} className="img" alt="vector" />
      <img src={cerveza} className="cerveza" alt="cerveza" />
    </div>
  );
};
