import React from "react";

import "./Formulario.css";
const Formulario = () => {
  return (
    <section>
      <form action="">
        <input
          placeHolder="Buscar"
          name="buscar"
          label="Buscar por Nombre"
          type="search"
          idLabel="Search"
        />
      </form>
    </section>
  );
};

export default Formulario;
