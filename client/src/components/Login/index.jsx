import { useState } from "react";
import { Loginus } from "../../../API";
import App from "../../App";
import Registro from "../Registro";
import Catalogo from "../catalogo";
import Cookie from "universal-cookie"
const Login = () => {
  const cookie= new Cookie();
  const [correo,setCorreo]= useState("")
  const [contraseña,setContraseña]= useState("") 
  const [form,setForm] = useState("")
 
  switch (form) {
    case "Inicio":
      return <App/>
    case "Registro":
      return <Registro/>

      case "Juegos":
        return <Catalogo/>     
  
    default:
      break;
  }

  const iniciarsesion = async (e) => {
      e.preventDefault()
      const response = await Loginus({
        correo: correo,
        contraseña: contraseña 
      })
      if (response.data[0].correo == correo) {
        
      alert("logueado owowowowowow")
     cookie.set("NombreCookie",response.data[0].correo, {path : '/'});
     cookie.set('numeroCookie', response.data[0].numero, {path : '/'});
    cookie.set('nombreCookie', response.data[0].nombre, {path : '/'});
    
    
      
  }
  else{
    alert("Usuario o contraseña incorrecta")
  } 
    }

    return (

      <div className="containerLo">
      <div className="containerRe">
      <nav>
            <span class="logo">JUEGOSPICHA</span>
            <ul>
                <li
                onClick={() => setForm("Inicio")}
                >INICIO</li>
                <li
                onClick={() => setForm("Registro")} 
                >Registrarse</li>
                
            </ul>
        </nav>
        </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        
        <div
          style={{
            background: "#50505a",
            width: "17%",
            height: "20%",
            padding: "45px",
            position: "relative",
            top :'-800px',
            margin: '100px'
          }}
        >
          <form onSubmit={iniciarsesion} style={{textAlign:'center'}}>
          <h1 style={{ color: "white", fontFamily: "revert" }}>Login</h1>
          <br /><br />
            <input
              type="email"
              id="nombre"
              required
              placeholder="ingrese su correo"
              style={{
                padding: "10px",
                width :'100%',
                border: "1px solid #aaa",
                margin: "5px",
              }}
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
              
            />
            <br /><br /><br />
            <input
              type="password"
              id="numero"
              required
              placeholder="ingrese su contraseña"
              style={{
                padding: "10px",
                width :'100%',
                border: "1px solid #aaa ",
                margin: "5px",
              }}
              value={contraseña}
             onChange={(event) => setContraseña(event.target.value)}
            />
            <br />
            <br /> <br />
            <button
              type="submit"
              style={{
                background: "white",
                border: "none",
                padding: "9px",
                width: "100px",
                color: "gray",
              }}
            >
              enviar
            </button>
          </form>
          
        </div>
      </div>
      
      </div>
    );
  };
  
  
  export default Login