import React from "react";

import "./ErrorModal.scss";
import Button from "../button/ButtonComponent";

export default function ErrorModalComponent({ text, okHandler, closeModal,okText }) {
  return (
    <div className="error-modal-component">
      <div className="close-button" onClick={closeModal}>
        X
      </div>
      <h1>{text}</h1>
      <Button
        classes="send-order"
        clickHandler={() => {
          okHandler();
        }}
      >
        {okText}
      </Button>
    </div>
  );
}
