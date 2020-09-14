import React from "react";

import Button from "../button/ButtonComponent.js";

import moment from "moment";

import "./Order.scss";

export default function TableComponent({ table, assignToTable, text, type }) {
  return (
    <div className="order-component">
      {table.billRequested ? (
        <div className="bill-bar">A fost ceruta nota!</div>
      ) : null}
      <div className="top-side">
        <h2>Masa: {table.tableNumber}</h2>
        <Button
          classes={`assign-to ${type}`}
          clickHandler={(e) => {
            e.preventDefault();
            e.stopPropagation();
            assignToTable(table);
          }}
        >
          {text}
        </Button>
      </div>
      {type === "new-tables" ? (
        <div className="bottom-side">
          <div className="main-info">
            <span>comenzi: {table.noOrders}</span>
            <span>total: {table.total} RON</span>
          </div>
          <div className="elapsed-time">
            <span>{moment(table.lastOrder).fromNow()}</span>
          </div>
        </div>
      ) : (
        <>
          <div className="bottom-side my-orders">
            <div className="main-info">
              <span>numar comenzi: {table.noOrders}</span>
              <span>comenzi livrate: {table.delivered}</span>
              <span>total de plata: {table.total} RON</span>
              <span>status: {table.status}</span>
            </div>
            <div className="elapsed-time">
              <div>Ultima comanda</div>
              <span>{moment(table.lastOrder).fromNow()}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
