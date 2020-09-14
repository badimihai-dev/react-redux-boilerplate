import React from "react";

import Header from "../header/HeaderComponent";

import "./Layout.scss";

export default function LayoutComponent({ children, location, restaurant }) {
  return (
    <div className="layout-component">
      <Header restaurantTitle={restaurant.restaurantTitle.toLowerCase()} />
      {children}
    </div>
  );
}
