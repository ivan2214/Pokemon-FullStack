import React from "react";
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
            <button onClick={() => setPaginaActual(paginaActual - 1)}>
              Anterior
            </button>
          </li>
        )}
        <div className="divNumbers">
          {numberPages.map((n) => (
            <li key={n}>
              <button
                onClick={() => setPaginaActual(n)}
                className={` ${n === paginaActual ? "is-active" : ""} `}
              >
                {n}
              </button>
            </li>
          ))}
        </div>
        {paginaActual < numberPages.length && (
          <li>
            <button onClick={() => setPaginaActual(paginaActual + 1)}>
              Siguiente
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
