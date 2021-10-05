import React, { useState } from 'react'

import { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

  const [formulario, setFormulario] = useState({
    nombre: '',
    categoria: ''
  });

  const { categorias } = useContext(CategoriasContext);
  const { setBusqueda, setConsulta } = useContext(RecetasContext);

  const obtenerFormulario = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault()
        setBusqueda(formulario)
        setConsulta(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingredientes</legend>
      </fieldset>

      <div className="row mt-2">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Buscar por Ingredientes"
            onChange={obtenerFormulario}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerFormulario}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria) => {
              return (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              );
            })};
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <button
            type="submit"
            className="btn btn-primary w-100"
          >Buscar Bebidas</button>
        </div>
      </div>
    </form>
  );
}

export default Formulario;