import React from "react";
import Input from "../Input/Input";
import "./Formulario.css";
const Formulario = () => {
  return (
    <section>
      <form action="">
        <Input
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
