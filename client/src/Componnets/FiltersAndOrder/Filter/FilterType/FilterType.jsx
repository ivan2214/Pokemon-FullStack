import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../../../redux/actions";
import "./filterType.css";

const FilterType = () => {
  const allTypes = useSelector((state) => state.types);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    dispatch(getTypes());
  }
  return (
    <select className="types">
      <option onChange={(e) => handleChange(e)} value="all">
        Tipos
      </option>
      {allTypes?.map((t) => {
        return (
          <option value={t.name} key={t.id}>
            {t.name.toUpperCase() }
          </option>
        );
      })}
    </select>
  );
};

export default FilterType;
