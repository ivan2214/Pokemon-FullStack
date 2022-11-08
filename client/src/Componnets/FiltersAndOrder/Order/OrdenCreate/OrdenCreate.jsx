import React from "react";
import { useDispatch } from "react-redux";
import { filterCreate } from "../../../../redux/actions";
import "./OrdenCreate.css";
const OrdenCreate = () => {
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(filterCreate(e.target.value));
  }

  return (
    <select onChange={(e) => handleChange(e)} className="created">
      <option value="all">All</option>
      <option value="existing">Existing</option>
      <option value="creados">creados</option>
    </select>
  );
};

export default OrdenCreate;
