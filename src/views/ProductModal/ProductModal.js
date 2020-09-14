import React from "react";

import Modal from "../_common/modal/ModalContainer";
import Button from "../_common/button/ButtonComponent";
// import Input from "../_common/input-field/InputComponent";

import "./ProductModal.scss";

export default function ProductModal({
  product,
  closeModal,
  total,
  quantity,
  increment,
  decrement,
  addToOrder,
  setComments,
}) {
  return (
    <Modal>
      <div className="product-modal-component">
        <div className="close-button" onClick={closeModal}>
          X
        </div>
        <div>
          <img className="media" src={product.image} alt="product-media" />
          {/* <div >
        </div> */}
          <div className="details">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="comments-textfield">
            <h4>Introdu comentarii: (optional)</h4>
            <textarea
              placeholder="..."
              className="comments-field"
              onChange={setComments}
            ></textarea>
            {/* <Input
              type="textarea"
              name="comments"
              placeholder="..."
              changeHandler={setComments}
            /> */}
          </div>
        </div>
        <div className="bottom-functionality">
          <div className="pricing">
            <div className="increments">
              <div
                className="increment button"
                onClick={quantity > 1 ? decrement : () => {}}
              >
                -
              </div>
              <div className="count">{quantity}</div>
              <div className="decrement button" onClick={increment}>
                +
              </div>
            </div>
            <div className="total">{total.toFixed(2)} RON</div>
          </div>
          <Button classes="add-to-cart" clickHandler={addToOrder}>
            adauga in cos
          </Button>
        </div>
      </div>
    </Modal>
  );
}
