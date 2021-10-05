const Formulario = () => {
  return (
    <form
      className="col-12"
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
          />
        </div>

        <div className="col-md-4 mb-2">
          <select name="categoria" className="form-control">
            <option value="">-- Selecciona Categoría --</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <button
            type="submit"
            className="btn btn-primary col-md-12"
          >Buscar Bebidas</button>
        </div>
      </div>
    </form>
  );
}

export default Formulario;