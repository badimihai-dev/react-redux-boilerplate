import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function NavbarComponent({ location, setLocation }) {
  if (location === "/order") {
    return <Fragment />;
  }
  
  return (
    <div
      className={`navbar-component ${
        location === "/my-orders"
          ? "right"
          : location === "/new-orders"
          ? "left"
          : ""
      }`}
    >
      <div className="button" onClick={() => setLocation("/new-orders")}>
        <NavLink to="/new-orders">MESE NOI</NavLink>
      </div>
      <div className="button" onClick={() => setLocation("/my-orders")}>
        <NavLink to="/my-orders">MESELE MELE</NavLink>
      </div>
    </div>
  );
}
