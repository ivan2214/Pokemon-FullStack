import React from "react";
import { useSelector } from "react-redux";
import "./filterType.css";

const FilterType = () => {
  const allTypes = useSelector((state) => state.types);
  return (
    <select className="types">
      <option value="all">Tipos</option>
      {allTypes?.map((t) => {
        return (
          <option value={t.name} key={t.id}>
            {t.name[0].toUpperCase() + t.name.slice(1)}
          </option>
        );
      })}
    </select>
  );
};

export default FilterType;
