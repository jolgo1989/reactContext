// Importa el hook useContext de React para acceder a los datos del contexto
import { useContext } from "react";
// Importa el contexto 'ConunterContext' desde su ubicación en el proyecto
import { ConunterContext } from "../context/CounterContext";

// Define el componente InforCard que utiliza el contexto
const InforCard = () => {
  // Extrae el valor 'counter' del contexto 'ConunterContext'
  const { counter } = useContext(ConunterContext);

  return (
    <div>
      {/* Título del componente */}
      <h1>InforCard</h1>
      {/* Muestra el valor actual del contador */}
      <p>{counter}</p>
    </div>
  );
};

// Exporta el componente InforCard para que pueda usarse en otras partes de la aplicación
export default InforCard;
