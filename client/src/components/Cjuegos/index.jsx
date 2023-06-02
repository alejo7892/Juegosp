import { useState } from "react"
import { Crearjuegos } from "../../../API"
import App from "../../App"
import Catalogo from "../catalogo"
const Cjuegos =  () =>{
    const [imagenC, setImagen]= useState("")
    const [tituloC, setTitulo]= useState("")
    const [descripcionC, setDescripcion]= useState("")
    const [precioC, setPrecio]= useState("")
    const [form,setForm]= useState("")
    switch (form) {
      case "Inicio":
      return <App/>
    
      case "Juegos":
      return <Catalogo/>        
      default:
        break;
    }


    const crej = async(e) =>{
        e.preventDefault()
      
        const response = await Crearjuegos({
          imagen: imagenC,
          titulo : tituloC,
          descripcion: descripcionC,
          precio : precioC
         
        })
        }
        
    return(

        <div className="containerLo">
        <div >
        <nav>
              <span class="logo">JUEGOSPICHA</span>
              <ul>
                  <li
                  onClick={() => setForm("Inicio")}
                  >INICIO</li>
                  <li
                  onClick={() => setForm("Juegos")} 
                  >Juegos</li>
                  
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
          <form onSubmit={crej} style={{textAlign:'center'}}>
          <h1 style={{ color: "white", fontFamily: "revert" }}>Crear juego</h1>
          <br /><br />
            <input
              type="text"
              id="imagen"
              required
              placeholder="ingrese la imagen por url"
              style={{
                padding: "10px",
                width :'100%',
                border: "1px solid #aaa",
                margin: "5px",
              }}
              value={imagenC}
              onChange={(event) => setImagen(event.target.value)}
            />
            <br /><br />
            <input
              type="text"
              id="titulo"
              required
              placeholder="ingrese el titulo del juego"
              style={{
                padding: "10px",
                width :'100%',
                border: "1px solid #aaa ",
                margin: "5px",
              }}
              value={tituloC}
              onChange={(event) => setTitulo(event.target.value)}
            />
            <br /><br />
            <input
              type="text"
              id="descripcion"
              placeholder="ingrese la descripcion del juego"
              style={{
                padding: "10px",
                width :'100%',
                border: " solid 1px #aaa",
                margin: "5px",
              }}
              value={descripcionC}
              onChange={(event) => setDescripcion(event.target.value)}
            />
            <br /><br />
            <input
              type="number"
              id="precio"
              placeholder="ingrese el precio del juego"
              style={{
                padding: "10px",
                width :'100%',
                border: " solid 1px #aaa",
                margin: "5px",
              }}
              value={precioC}
              onChange={(event) => setPrecio(event.target.value)}
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
    )
}

export default Cjuegos