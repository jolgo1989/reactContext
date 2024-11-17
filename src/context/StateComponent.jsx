// Importa useState de React para gestionar el estado local y el contexto creado previamente
import { useState } from "react";
import { ConunterContext } from "./CounterContext"; // Importa el contexto creado para compartir el estado del contador

// Define el componente StateComponent que actuará como proveedor del estado para sus hijos
const StateComponent = ({ children }) => {
  // Declara una variable de estado 'counter' y su función para actualizarla 'setCounter', inicializada en 0
  const [counter, setCounter] = useState(0);

  // Define una función para incrementar el valor del contador
  const increment = () => {
    setCounter(counter + 1); // Incrementa el contador en 1
  };

  // Define una función para decrementar el valor del contador
  const decrement = () => {
    setCounter(counter - 1); // Decrementa el contador en 1
  };

  // Define una función para reiniciar el contador a 0
  const reset = () => {
    setCounter(0); // Reinicia el contador a su valor inicial
  };

  return (
    // Usa el proveedor del contexto 'ConunterContext.Provider' para compartir el estado y las funciones con los hijos
    <ConunterContext.Provider
      value={{
        counter, // El estado actual del contador
        increment, // Función para incrementar el contador
        decrement, // Función para decrementar el contador
        reset, // Función para reiniciar el contador
      }}
    >
      {children}{" "}
      {/* Renderiza los componentes hijos que estarán envueltos por este proveedor */}
    </ConunterContext.Provider>
  );
};

// Exporta el componente StateComponent para que pueda ser utilizado en otras partes de la aplicación
export default StateComponent;
