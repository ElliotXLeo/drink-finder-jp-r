import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const { recetaBebida, setIdReceta, setRecetaBebida } = useContext(ModalContext);

  const mostrarIngredientes = (receta) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={receta[`strIngredient${i}`]}>{receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}</li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img src={receta.strDrinkThumb} alt={receta.strDrink} className="card-img-top" />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => {
              setIdReceta(receta.idDrink);
              handleOpen();
            }}
          >Ver Receta</button>

          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setIdReceta(null);
              setRecetaBebida({});
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recetaBebida.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>
                {recetaBebida.strInstructions}
              </p>
              <img src={recetaBebida.strDrinkThumb} alt={recetaBebida.strDrink} className="my-2 rounded mx-auto d-block w-50" />
              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(recetaBebida)}
              </ul>
            </div>
          </Modal>
        </div>

      </div>
    </div>
  );
}

export default Receta;