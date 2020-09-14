import React, { Component } from "react";
import ErrorModal from "./ErrorModalComponent";
import Modal from "../modal/ModalContainer";

export default class ErrorModalContainer extends Component {
  render() {
    return (
      <Modal>
        <ErrorModal {...this.props} />
      </Modal>
    );
  }
}
