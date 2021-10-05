const Receta = ({ receta }) => {
  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img src={receta.strDrinkThumb} alt={receta.strDrink} className="card-img-top" />

        <div className="card-body">
          <button type="button" className="btn btn-primary w-100">Ver Receta</button>
        </div>

      </div>
    </div>
  );
}

export default Receta;