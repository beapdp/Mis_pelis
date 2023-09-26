import React, { useState } from 'react';

const Buscador = ({ listadoState, setListadoState }) => {
  
  // Estado para almacenar el término de búsqueda.
  const [busqueda, setBusqueda] = useState('');
  
  // Estado para identificar si no se encontraron resultados.
  const [noEncontrado, setNoEncontrado] = useState(false);

  /**
   * Función que gestiona la búsqueda de películas.
   * @param {Event} e - Evento del campo de entrada.
   */
  const buscarPeli = (e) => {
    const valorBusqueda = e.target.value;
    
    // Actualiza el estado del término de búsqueda.
    setBusqueda(valorBusqueda);

    // Filtra las películas basándose en el término de búsqueda.
    let pelis_encontradas = listadoState.filter(peli => 
      peli.titulo.toLowerCase().includes(valorBusqueda.toLowerCase())
    );

    // Si la longitud de la búsqueda es <= 1 o no se encontraron películas,
    // recupera todas las películas de localStorage.
    if (valorBusqueda.length <= 1 || pelis_encontradas.length <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis")) || [];
      // Indica si no se encontraron resultados solo si la longitud de búsqueda es > 1.
      setNoEncontrado(valorBusqueda.length > 1);
    } else {
      // Si hay resultados, establece el estado de noEncontrado a false.
      setNoEncontrado(false);
    }

    // Actualiza el estado principal de las películas con los resultados filtrados.
    setListadoState(pelis_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      
      {/* Muestra el mensaje si no se encontraron resultados y la búsqueda tiene al menos 2 caracteres. */}
      {noEncontrado && <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>}
      
      <form>
          <input 
              type="text"
              id="search_field"
              autoComplete='off'
              value={busqueda}
              onChange={buscarPeli}  // Llama a la función de búsqueda cuando el valor cambia.
          />
      </form>
    </div>
  );
}

export default Buscador;
