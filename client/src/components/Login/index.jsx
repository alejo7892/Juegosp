import { useState } from "react";
import { Loginus } from "../../../API";
const Login = () => {
  const [correo,setCorreo]= useState("")
  const [contraseña,setContraseña]= useState("") 
    const iniciarsesion = async () => {
      e.preventDefault()
      const response = await Loginus({
        correo: correo,
        contraseña: contraseña 
      })

    }

    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
   
        <div
          style={{
            background: "#50505a",
            width: "17%",
            padding: "45px",
            
            position: "relative",
            top :'200px'
  
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
              onClick={(event) => setCorreo(event.target.value)}
              
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
             onClick={(event) => setContraseña(event.target.value)}
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
    );
  };
  
  
  export default Login