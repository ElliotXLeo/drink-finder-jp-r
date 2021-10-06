import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idReceta, setIdReceta] = useState(null);
  const [recetaBebida, setRecetaBebida] = useState({});

  useEffect(() => {
    if (idReceta) {
      const obtenerReceta = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const data = await axios.get(url);
        setRecetaBebida(data.data.drinks[0]);
      }
      obtenerReceta();
    }
  }, [idReceta])

  return (
    <ModalContext.Provider
      value={{
        recetaBebida,
        setIdReceta,
        setRecetaBebida
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;