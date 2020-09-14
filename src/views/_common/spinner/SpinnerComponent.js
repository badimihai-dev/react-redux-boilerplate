import React from "react";

import "./Spinner.scss";

export default function SpinnerComponent() {
  return (
    <div className="custom-spinner-component">
      <div className="blob top"></div>
      <div className="blob bottom"></div>
      <div className="blob left"></div>

      <div className="blob move-blob"></div>
    </div>
  );
}
