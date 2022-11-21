import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  orderByAtack,
  orderByName,
} from "../../../redux/actions";
import "./Order.css";
const Order = () => {
  const dispatch = useDispatch();
  const pokemonsCopia = useSelector((state) => state.allPokemons);

  useEffect(() => {
    if (!pokemonsCopia.length) {
      dispatch(getAllPokemons());
    }
  }, [dispatch, pokemonsCopia.length]);

  function handleOrder(ev) {
    if (ev.target.value === "asc" || ev.target.value === "desc") {
      ev.preventDefault();
      dispatch(orderByName(ev.target.value));
    }

    if (ev.target.value === "ascFuerza" || ev.target.value === "descFuerza") {
      ev.preventDefault();
      dispatch(orderByAtack(ev.target.value));
    }

    if (ev.target.value === "default") {
      ev.preventDefault();
      dispatch(getAllPokemons());
    }
  }
  return (
    <select onChange={(ev) => handleOrder(ev)} className="order">
      <option value="default">Order</option>
      <option value="asc">Ordenar A-Z</option>
      <option value="desc">Ordenar Z-A</option>
      <option value="ascFuerza">Ordenar Fuerza (asc)</option>
      <option value="descFuerza">Ordenar Fuerza (desc)</option>
    </select>
  );
};

export default Order;
