import React from "react";
import "./OrdenCreate.css";
const OrdenCreate = () => {
  return (
    <select  className="created">
      <option value="all">All</option>
      <option value="existing">Existing</option>
      <option value="created">Created</option>
    </select>
  );
};

export default OrdenCreate;
