import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {

  const[listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
    {/*cabecera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
    </header>
    {/*barra de navegación*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>
    {/*contenido principal*/}
    <section className="content">
        {/*aquí va el listado de películas*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        
    </section>
    {/*-barra lateral*/}
    <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
        <Crear setListadoState={setListadoState}/>
    </aside>
    {/*pie de pagina*/}
    <footer className="footer">
        &copy; Máster en Javascript ES12 y TypeScript - <a href="/#">MIweb</a>
    </footer>
    
</div>
  );
}

export default App;
