import { useState } from "react";
import { registrous } from "../../../API";
import Login from "../Login";
import App from "../../App";
const Registro = () => {
  const [nombreU, setNombre]= useState("")
  const [numeroU, setNumero]= useState("")
  const [profesionU, setProfesion]= useState("")
  const [correoU, setCorreo]= useState("")
  const [contraseñaU, setContraseña]= useState("")
  const [form,setForm] = useState("")
 
  switch (form) {
    case "Inicio":
      return <App/>
    case "Iniciar sesion":
      return <Login/>

      case "Juegos":
        return <Catalogo/>     
  
    default:
      break;
  }  


  const reg = async(e) =>{
  e.preventDefault()

  const response = await registrous({
    nombre: nombreU,
    numero : numeroU,
    profesion: profesionU,
    correo : correoU,
    contraseña: contraseñaU  
  })
  }
  

  return (
    
    <div className="containerLo">
      <div >
      <nav>
            <span class="logo">JUEGOSPE</span>
            <ul>
                <li
                onClick={() => setForm("Inicio")}
                >INICIO</li>
                <li
                onClick={() => setForm("Iniciar sesion")} 
                >Iniciar sesion</li>
                
            </ul>
        </nav>
        {/* </div> */}
        </div>
    <div style={{ width: "100%", display: "flex", justifyContent: "center", background: '' }}>
 
      <div
        style={{
          background: "#50505a",
          width: "20%",
          padding: "45px",
          
          position: "relative",
          top :'200px'

        }}
      >
        <form onSubmit={reg} style={{textAlign:'center'}}>
        <h1 style={{ color: "white", fontFamily: "revert" }}>Registro</h1>
        <br /><br />
          <input
            type="text"
            id="nombre"
            required
            placeholder="ingrese su nombre"
            style={{
              padding: "10px",
              width :'100%',
              border: "1px solid #aaa",
              margin: "5px",
            }}
            value={nombreU}
            onChange={(event) => setNombre(event.target.value)}
          />
          <br /><br />
          <input
            type="number"
            id="numero"
            required
            placeholder="ingrese su numero de telefono"
            style={{
              padding: "10px",
              width :'100%',
              border: "1px solid #aaa ",
              margin: "5px",
            }}
            value={numeroU}
            onChange={(event) => setNumero(event.target.value)}
          />
          <br /><br />
          <input
            type="text"
            id="email"
            placeholder="ingrese su profesion"
            style={{
              padding: "10px",
              width :'100%',
              border: " solid 1px #aaa",
              margin: "5px",
            }}
            value={profesionU}
            onChange={(event) => setProfesion(event.target.value)}
          />
          <br /><br />
          <input
            type="email"
            id="email"
            placeholder="ingrese su correo"
            style={{
              padding: "10px",
              width :'100%',
              border: " solid 1px #aaa",
              margin: "5px",
            }}
            value={correoU}
            onChange={(event) => setCorreo(event.target.value)}
          />
          <br /><br />
          <input
            type="password"
            id="contraseña"
            required
            placeholder="ingrese su contraseña"
            style={{
              padding: "10px",
              width :'100%',
              border: "solid 1px #aaa",
              margin: "5px",
            }}
            value={contraseñaU}
            onChange={(event) => setContraseña(event.target.value)}
          />
          <br /><br />
          <button
            type="submit"
            style={{
              background: "white",
              width :'100%',
              border: "none",
              padding: "9px",
              color: "grey",
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


export default Registro