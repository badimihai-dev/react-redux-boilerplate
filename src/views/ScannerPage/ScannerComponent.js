import React from "react";
import QrReader from "react-qr-reader";

import "./Scanner.scss";

export default function ScannerComponent({ handleError, handleScan }) {
  return (
    <div className="scanner-component">
      <h1>ourmenu</h1>
      <h2>scaneaza codul QR.</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%", maxWidth: "320px", margin: "20px auto" }}
        facingMode="environment"
      />
    </div>
  );
}
