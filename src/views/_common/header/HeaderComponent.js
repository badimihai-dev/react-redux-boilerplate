import React from "react";

import "./Header.scss";

export default function HeaderComponent({ restaurantTitle }) {
  return <div className="header-component"><h1>{restaurantTitle}</h1></div>;
}
