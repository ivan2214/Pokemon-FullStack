import React from "react";
import "./Order.css"
const Order = () => {
  return (
    <select className="order">
      <option value="default">Order</option>
      <option value="asc">Sort A-Z</option>
      <option value="desc">Sort Z-A</option>
      <option value="fue">Strong</option>
      <option value="deb">Weak</option>
    </select>
  );
};

export default Order;
