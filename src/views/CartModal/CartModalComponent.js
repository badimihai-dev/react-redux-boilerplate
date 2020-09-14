import React from "react";

import "./CartModal.scss";
import ProductItem from "../RestaurantPage/subcomponents/ProductItem";
import Button from "../_common/button/ButtonComponent";
import { ReactComponent as EmptyCart } from "../../assets/icons/empty-cart.svg";

export default function CartModalComponent({
  closeModal,
  products,
  total,
  incrementProduct,
  decrementProduct,sendOrder
}) {
  return (
    <div className="cart-modal-component">
      <div className="close-button" onClick={closeModal}>
        X
      </div>
      <h1>Cosul meu</h1>
      {products.length === 0 ? (
        <div className="empty-cart">
          <EmptyCart />
          <h2>Cosul este gol</h2>
        </div>
      ) : null}
      {products.map((product, index) => (
        <div className="cart-item" key={index}>
          <ProductItem product={product} selectProduct={() => {}} />
          <div className="pricing">
            <div className="increments">
              <div
                className="decrement button"
                onClick={() => decrementProduct(product)}
              >
                -
              </div>
              <div className="count">{product.quantity}</div>
              <div
                className="increment button"
                onClick={() => incrementProduct(product)}
              >
                +
              </div>
            </div>
            <div className="total">{product.total.toFixed(2)} RON</div>
          </div>
        </div>
      ))}
      {products.length !== 0 ? (
        <div className="bottom-side">
          <h3>Total: {total.toFixed(2)} RON</h3>
          <Button classes="send-order" clickHandler={() => {sendOrder()}}>
            trimite comanda
          </Button>
        </div>
      ) : null}
    </div>
  );
}
