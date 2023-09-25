import React, { useEffect, useState } from 'react'
import Editar from './Editar';

const Listado = ({listadoState, setListadoState}) => {
  // Estado para gestionar el modo de edición de una película específica.
  const [editar, setEditar] = useState(0);

  // Efecto que se ejecuta al montar el componente para cargar las películas del localStorage.
  useEffect(() =>  {
    const peliculas = conseguirPeliculas();
    setListadoState(peliculas);
  }, []);

  /**
   * Función que recupera las películas del localStorage.
   * @return {Array} Devuelve una lista de películas o un array vacío si no hay películas.
   */
  const conseguirPeliculas = () => {
    const peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
    return peliculas;
  }

  /**
   * Función que borra una película por su ID.
   * @param {number} id - El ID de la película a borrar.
   */
  const borrarPeli = (id) => {
    const pelis_almacenadas = conseguirPeliculas();
    const nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
    
    setListadoState(nuevo_array_pelis);
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  }

  return (
    <>
        {/* Renderiza la lista de películas si hay películas, de lo contrario muestra un mensaje. */}
        {listadoState !== null && listadoState.length > 0 ?
          listadoState.map(peli => (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick= {() => setEditar(peli.id)}>Editar</button>
              <button className="delete" onClick= {() => borrarPeli(peli.id)}>Eliminar</button>
              {/* Si estamos en modo de edición para esta película, muestra el componente Editar */}
              {editar === peli.id && (
                <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>
              )}
            </article>
          )) :
        <h2>No hay pelis para mostrar</h2>}
    </>
  )
}

export default Listado;
