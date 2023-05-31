import { useState } from "react";
import App from "../../App";
import Registro from "../Registro";
const Catalogo = () => {
    const [form,setForm] = useState("")

    switch (form) {
        case "Inicio":
        return <App/>     
            
    
        default:
            break;
    }
     return (

        
 

        <div class="container">
        <nav>
            <span class="logo">JUEGOSPICHA</span>
            <ul>
                <li
                onClick={() => setForm("Inicio")}
                
                >INICIO</li>
                <li>Mi carrito</li>
                <li>Mis juegos</li>
                
            </ul>
        </nav>
        <div className="cards">
        <div  style={{display:'flex',}}>
                <div  style={{border:'3px solid gray',width:'12%',height:'22%',padding:'10px',margin:'100px'}}>
                <img src="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg" alt="" style={{width:'100%',height : '100%'}}/>
                <h1 style={{color:'blue'}}>tarjeta</h1> 
                <h3>tarjetota</h3>
                <h3 style={{color : 'green'}}>20000</h3>
                </div>
                </div>

        </div>
    </div>
    
        
      
     )
}

export default Catalogo