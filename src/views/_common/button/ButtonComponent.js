import React from "react";

import "./Button.scss";

export default function ButtonComponent({ children, clickHandler, classes }) {
  return (
    <button className={`button-component ${classes}`} onClick={clickHandler}>
      {children}
    </button>
  );
}
