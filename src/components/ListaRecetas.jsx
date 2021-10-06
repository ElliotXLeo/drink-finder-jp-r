import { Fragment } from "react";
import { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {

  const { recetas } = useContext(RecetasContext);

  return (
    <Fragment>
      {
        recetas.map((receta) => {
          return (
            <Receta
              key={receta.idDrink}
              receta={receta}
            />
          );
        })
      }
    </Fragment>
  );
}

export default ListaRecetas;