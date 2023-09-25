import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({ setListadoState }) => {

    // Título que se muestra en el componente
    const tituloComponente = "Añadir película";

    // Estado inicial del formulario para la creación de una nueva película
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    // Destructurando para un acceso más fácil a las propiedades de peliState
    const { titulo, descripcion } = peliState;

    // Manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        // Establecer el estado basado en el nombre del campo (name) y su valor
        setPeliState({
            ...peliState,
            [e.target.name]: e.target.value
        });
    }

    // Manejar la presentación del formulario
    const conseguirDatosForm = (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Crear un nuevo objeto de película con un ID basado en la hora actual
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Agregar la nueva película al estado global de la lista de películas
        setListadoState(prevPelis => [...prevPelis, peli]);

        // Guardar la nueva película en el localStorage
        GuardarEnStorage("pelis", peli);
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            {/* Mostrar el título de la película recién creada, si está disponible */}
            <strong>
                {(titulo && descripcion) && "Has creado la película: " + titulo}
            </strong>
            {/* Formulario para crear una nueva película */}
            <form onSubmit={conseguirDatosForm}>
                {/* Campo para el título */}
                <input
                    type="text"
                    id='titulo'
                    name='titulo'
                    placeholder="Título"
                    value={titulo}
                    onChange={handleChange}
                />
                {/* Campo para la descripción */}
                <textarea
                    id='descripcion'
                    name='descripcion'
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={handleChange}
                ></textarea>
                {/* Botón para enviar el formulario */}
                <input
                    type="submit"
                    id='save'
                    value="Guardar"
                />
            </form>
        </div>
    )
}

export default Crear;




/*import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

    const tituloComponente  = "Añadir película";
    
    const [peliState, setPeliState] = useState({
        titulo:"",
        descripcion:""

    })

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
 
        //CRear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //Guardar estado
        setPeliState(peli);

        //Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli]
        });

        //Guardar en el localStorage
        GuardarEnStorage("pelis", peli);
        
       
    }

    
    

   

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
            {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
        </strong>
        <form onSubmit={conseguirDatosForm}>
            <input  type="text" 
                    id='titulo'
                    name='titulo'
                    placeholder="Título"/>
            <textarea   id='descripcion'
                        name='descripcion'
                        placeholder="Descripción"></textarea>
            <input type="submit" 
                    id='save'
                    value="Guardar"/>
        </form>
    </div>
  )
}

export default Crear*/
