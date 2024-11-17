// Importa el hook useContext de React para acceder a los datos del contexto
import { useContext } from "react";
// Importa el contexto 'ConunterContext' desde su ubicación en el proyecto
import { ConunterContext } from "../context/CounterContext";

// Define el componente Footer que utiliza el contexto
const Footer = () => {
  // Extrae la función 'decrement' del contexto 'ConunterContext' usando useContext
  const { decrement } = useContext(ConunterContext);

  return (
    <div>
      {/* Título del componente */}
      <h1>Footer</h1>
      {/* Botón que, al hacer clic, llama a la función 'decrement' para reducir el contador */}
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

// Exporta el componente Footer para su uso en otras partes de la aplicación
export default Footer;
