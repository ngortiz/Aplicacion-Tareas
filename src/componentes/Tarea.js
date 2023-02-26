import "../hojas-de-estilos/Tarea.css";
import freeCodeCampLogo from "../imagenes/freecodecamp-logo.png";
import ListaDeTareas from "./ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="freecodecamp-logo" alt="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
