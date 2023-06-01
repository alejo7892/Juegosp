import { useState, useEffect } from 'react'
import './App.css'
import Registro from './components/Registro'
import Login from './components/Login'
import Catalogo from './components/catalogo'
import  Cookie  from 'universal-cookie'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm]= useState("Inicio")
  const [nombre,setNombre]= useState("")
  const cookie= new Cookie();
  const usuario = cookie.get('NombreCookie')
  useEffect(()=>{
  
    setNombre(cookie.get('nombreCookie'))
    
    
    
    },[nombre])


  switch (form) {
    case "Inicio":
        return <div class="container">
        <nav>
            <span class="logo">JUEGOSPICHA</span>
            <ul>
                <li
                onClick={() => setForm("Inicio")}
                >INICIO</li>
                {nombre== '' || nombre == undefined ?
                <>
                 <li
                 onClick={() => setForm("Iniciar sesion")}
                 >Iniciar sesion</li> <li
                 onClick={() => setForm("Registro")} 
                 >Registrarse</li> </> : <li onClick={() =>setForm("Juegos")}>Juegos</li>
              }
               
               
                
                
            </ul>
        </nav>
        <header>
            <h1>BIENVENIDOS</h1>
            <h2>Esto es juegos picha</h2>
            <p>Donde prodras encontrar los ultimos juegos a un gran precio!!<br/><constantemente/></p>
            <button type="button">
                Mas Informacion
            </button>
        </header>
    </div>
      
      case "Registro":
        return <Registro/>

        case "Iniciar sesion":
         return <Login/>

        case "Juegos":
            return <Catalogo/>
        
  
    default:
        break;
  }

  return (
    <>

    {/* <Registro></Registro> */}
    {/* <Login></Login> */}
    {/* <Catalogo></Catalogo> */}
    
    
    </>
  )
}

export default App
