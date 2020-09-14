import React from "react";

import "./RestaurantPage.scss";
import SpinnerComponent from "../_common/spinner/SpinnerComponent";
import ProductModal from "../ProductModal/ProductModalContainer";
import CartModal from "../CartModal/CartModalContainer";

import { ReactComponent as CartIcon } from "../../assets/icons/cart-icon.svg";
import { ReactComponent as BillIcon } from "../../assets/icons/bill-icon.svg";

import ProductItem from "./subcomponents/ProductItem";
import OrderModal from "../OrderModal/OrderModalContainer";

export default function RestaurantPageComponent({
  restaurant,
  products,
  isRequestingProducts,
  setDefaultCategory,
  requestProductsByCategory,
  selectedProduct,
  selectProduct,
  cartOpen,
  toggleCartOpen,
  showCartButton,
  table,
  toggleOrderOpen,
  orderOpen,
}) {
  return (
    <div
      className={`restaurant-page-component ${
        showCartButton ? "bottom-space" : ""
      }`}
    >
      <div className="categories-bar">
        {restaurant.categories
          ? restaurant.categories.map((category, index) => (
              <div
                className={`categories-bar-item ${
                  category === restaurant.defaultCategory ? "active" : ""
                }`}
                onClick={() => {
                  setDefaultCategory(category);
                  requestProductsByCategory(category);
                }}
                key={index}
              >
                {category}
              </div>
            ))
          : null}
        <div className="categories-bar-item blank" />
      </div>
      {isRequestingProducts ? (
        <SpinnerComponent />
      ) : (
        <div className="products-listing-component">
          {products.map((product, index) => (
            <ProductItem
              product={product}
              selectProduct={() => selectProduct(product)}
              key={index}
            />
          ))}
        </div>
      )}
      {selectedProduct ? (
        <ProductModal
          product={selectedProduct}
          closeModal={() => selectProduct(null)}
        />
      ) : null}

      {cartOpen ? <CartModal closeModal={toggleCartOpen} /> : null}
      {orderOpen ? <OrderModal closeModal={toggleOrderOpen} /> : null}

      {table.orders.length !== 0 ? (
        <div className="open-order-button" onClick={toggleOrderOpen}>
          <BillIcon />
        </div>
      ) : null}

      {showCartButton ? (
        <div className="open-cart-button" onClick={toggleCartOpen}>
          <CartIcon />
          COSUL MEU
        </div>
      ) : null}
    </div>
  );
}
