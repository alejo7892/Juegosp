import { useState } from "react";
import { Loginus } from "../../../API";
import App from "../../App";
import Registro from "../Registro";
import Catalogo from "../catalogo";
const Login = () => {
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
      if (response.data[0] != 0) {
        alert("logeado")
      }
      else{
        alert("no existe por favor registrese")
      }
    }

    return (

      <div>
      <div className="containerLo">
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
        <div >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        
        <div
          style={{
            background: "#50505a",
            width: "17%",
            padding: "45px",
            position: "relative",
            top :'-500px'
  
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
      </div>
    );
  };
  
  
  export default Login