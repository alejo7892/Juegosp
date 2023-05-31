import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'
import Login from './components/Login'
import Catalogo from './components/catalogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Registro></Registro>
    {/* <Login></Login> */}
    {/* <Catalogo></Catalogo> */}
    {/* <div class="container">
        <nav>
            <span class="logo">JUEGOSPICHA</span>
            <ul>
                <li>INICIO</li>
                <li>Iniciar sesion</li>
                <li>Registrarse</li>
                <li>Productos</li>
            </ul>
        </nav>
        <header>
            <h1>BIENVENIDOS</h1>
            <h2>Esto es juegos picha</h2>
            <p>Donde prodras encontrar los ultimos juegos a un gran precio!!<br/><constantemente/></p>
            <button type="button">
                Mas Informacion
                <img src="icono/bxs-right-arrow-alt.svg" alt=""/>
            </button>
        </header>
         <img class="emp" src="img/portfolio_site_img/EMP.png" alt=""/>
         <img class="fondo-emp" src="img/portfolio_site_img/pattern..png" alt=""/>
        <div class="icons">
            <i class='bx bxl-invision'></i>
            <i class='bx bxl-dropbox' ></i>
            <i class='bx bxl-linkedin' ></i>
        </div>
    </div> */}
    
    </>
  )
}

export default App
