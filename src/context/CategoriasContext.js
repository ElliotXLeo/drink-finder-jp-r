import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

  const [categorias, setCategoria] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categorias = await axios.get(url);
      setCategoria(categorias.data.drinks);
    }
    obtenerCategorias();
  }, [])

  return (
    <CategoriasContext.Provider
      value={{ categorias }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;