import { useSelector, useDispatch } from "react-redux";
import { filterTypes, getAllPokemons } from "../../../../redux/actions";
import "./filterType.css";

const FilterType = () => {
  const allTypes = useSelector((state) => state.types);
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    if (e.target.value === "Tipos") {
      dispatch(getAllPokemons());
    } else {
      dispatch(filterTypes(e.target.value));
    }
  }
  return (
    <select onChange={(e) => handleChange(e)} className="types">
      <option value="Tipos">Tipos</option>
      {allTypes?.map((t) => {
        return (
          <option value={t.name} key={t.id}>
            {t.name.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default FilterType;
