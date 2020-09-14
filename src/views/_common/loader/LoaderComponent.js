import React from "react";

import "./Loader.scss";

export default function LoaderComponent({ full }) {
  return (
    <div className={`custom-loader-component ${full ? "filled" : ""}`}>
      <div className="loader">
        <span>o</span>
        <span>u</span>
        <span>r</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>u</span>
      </div>
    </div>
  );
}
