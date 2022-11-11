import React from "react";
import Button from "../Button/Button";
import "./paginacion.css";

export const Paginacion = ({
  pokesPorPagina,
  paginaActual,
  setPaginaActual,
  pokemons,
  totalPokemons,
}) => {
  const numberPages = [];
  for (let i = 0; i < Math.ceil(totalPokemons / pokesPorPagina); i++) {
    numberPages.push(i + 1);
  }

  return (
    <div className="pagination p1">
      <ul>
        {paginaActual > 1 && (
          <li>
            <Button
              onClick={() => setPaginaActual(paginaActual - 1)}
              value="anterior"
            />
          </li>
        )}
        <div className="divNumbers">
          {numberPages.map((n) => (
            <li key={n}>
              <a
                onClick={() => setPaginaActual(n)}
                className={` ${n === paginaActual ? "is-active" : ""} `}
              >
                {n}
              </a>
            </li>
          ))}
        </div>
        {paginaActual < numberPages.length && (
          <li>
            <Button
              onClick={() => setPaginaActual(paginaActual + 1)}
              value="Siguiente"
            />
          </li>
        )}
      </ul>
    </div>
  );
};
