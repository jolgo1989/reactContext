// Importa el hook useContext de React para acceder al contexto global
import { useContext } from "react";
// Importa el contexto 'ConunterContext' desde su ubicación
import { ConunterContext } from "../context/CounterContext";

// Define el componente TopBar que interactúa con el contexto
const TopBar = () => {
  // Extrae la función 'reset' del contexto 'ConunterContext'
  const { reset } = useContext(ConunterContext);

  return (
    <div>
      {/* Título del componente */}
      <h1>TopBar</h1>
      {/* Botón que invoca la función 'reset' al hacer clic */}
      <button onClick={reset}>reset</button>
    </div>
  );
};

// Exporta el componente TopBar para que pueda utilizarse en otras partes de la aplicación
export default TopBar;
