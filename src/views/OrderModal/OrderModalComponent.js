import React, { Fragment } from "react";

import ProductItem from "../RestaurantPage/subcomponents/ProductItem";
import Button from "../_common/button/ButtonComponent";

import "./OrderModal.scss";

export default function OrderModalComponent({
  table,
  closeModal,
  requestBill,
}) {
  return (
    <div className="order-modal-component">
      <div className="close-button" onClick={closeModal}>
        X
      </div>
      <h1>Comenzile mele</h1>
      <h2>Masa: {table.tableNumber}</h2>
      {table.orders.length === 0 ? closeModal() : null}
      {Object.entries(table.orders).map(([key, order], index) => (
        <div className="order-item" key={index}>
          <h3>
            {new Date(order.date).getHours()}:
            {(new Date(order.date).getMinutes() < 10 ? "0" : "") +
              new Date(order.date).getMinutes()}
          </h3>
          {order.products.map((product, index) => (
            <Fragment key={index}>
              <ProductItem product={product} selectProduct={() => {}} />
              <div className="pricing">
                <div className="increments">
                  <div className="count">
                    {product.quantity}x {product.price} RON
                  </div>
                </div>
                <div className="total">
                  TOTAL: {product.total.toFixed(2)} RON
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      ))}
      <div className="bottom-side">
        <h3>Total: {table.total.toFixed(2)} RON</h3>
        {table.billRequested ? (
          <h2>Ai cerut nota, te rugam asteapta ospatarul.</h2>
        ) : (
          <Button
            classes="send-order"
            clickHandler={() => {
              requestBill();
            }}
          >
            cere nota
          </Button>
        )}
      </div>
    </div>
  );
}
