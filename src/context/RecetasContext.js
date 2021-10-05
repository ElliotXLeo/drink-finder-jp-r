import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

  const [recetas, setRecetas] = useState([]);
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  });
  const [consulta, setConsulta] = useState(false);

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consulta) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const data = await axios.get(url);
        // console.log(data.data.drinks);
        setRecetas(data.data.drinks);
      }
      obtenerRecetas();
      setConsulta(false);
    }
  }, [busqueda])
  return (
    <RecetasContext.Provider
      value={{
        recetas,
        setBusqueda,
        setConsulta
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;