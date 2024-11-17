// Importa el hook useContext de React para acceder a los datos del contexto
import { useContext } from "react";
// Importa el contexto 'ConunterContext' desde su ubicación en el proyecto
import { ConunterContext } from "../context/CounterContext";

// Define el componente Header que utiliza el contexto
const Header = () => {
  // Extrae los valores 'counter' y la función 'increment' del contexto 'ConunterContext'
  const { counter, increment } = useContext(ConunterContext);

  return (
    <div>
      {/* Título del componente */}
      <h1>Header</h1>
      {/* Botón que, al hacer clic, llama a la función 'increment' para aumentar el contador */}
      <button onClick={increment}>increment</button>
      {/* Muestra el valor actual del contador */}
      <p>{counter}</p>
    </div>
  );
};

// Exporta el componente Header para su uso en otras partes de la aplicación
export default Header;
