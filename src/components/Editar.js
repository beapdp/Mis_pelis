import React from 'react'

const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar película";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //Conseguir el target del evento, es decir, conseguir el formulario como tal para luego poder acceder a los  valores de cada campo
        let target = e.target;

        //Buscar el índice del objeto de la película a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //Crear objeto con ese id de ese indice, con el titulo y descripcion del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        //Actualizar el elemento con ese índice
        pelis_almacenadas[indice] = peli_actualizada;

        //Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        //Actualizar estados, tanto el de editar para que se cierre el formulario como el del listado para que se modifique todo a nivek visual
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }

  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={ e => guardarEdicion(e, peli.id)}>
        <input type='text'
                name='titulo'
                className='titulo_editado'
                defaultValue={peli.titulo}/>
        <textarea
                name = "descripcion"
                defaultValue={peli.descripcion}
                className='descripcion_editada'></textarea>
        <input type='submit' className='editar' value="Actualizar"/>
      </form>
    </div>
  )
}

export default Editar
