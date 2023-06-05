import { useState, useEffect } from "react";
import App from "../../App";
import Cjuegos from "../Cjuegos";
import Cookie from "universal-cookie"
import { miscompras } from "../../../API";
const Mostrarjuegos = () =>{
    const cookie= new Cookie();
    const [form,setForm] = useState("")
    const [users,setUsers] =useState([])

   

    useEffect(()=>{

        const listLoad=async()=>{
           
            const correoUs = cookie.get('NombreCookie')
            const info = {correoUs: correoUs}
        
            const response = await miscompras(info)
            setUsers(response.data);
        }
        
    
        listLoad()
    
    
        
        },[]) 
        

    switch (form) {
        case "Inicio":
        return <App/>     
        case "Crear juegos":
        return <Cjuegos/>   
        default:
            break;
    }
    return(
<>
        <div class="containerLo">
        <nav>
            <span class="logo">JUEGOSPE</span>
            <ul>
                <li
                onClick={() => setForm("Inicio")}
                
                >INICIO</li>
                <li
                onClick={() => setForm("Crear juegos")}
                >Crear juegos</li>
                
            </ul>
        </nav>
        </div>

{users.length != 0 ? (
    users.map((users,i)=>{
    return(
        
    <div key={i} className="cards">
    <div   style={{display:'flex',}}>
            <div  style={{border:'3px solid gray',width:'22%',height:'320%',padding:'10px',margin:'100px', position:'relative', top:'20px'}}>
            <img src={users.imagen} alt="" style={{width:'100%',height : '100%'}}/>
            <h1 style={{color:'black'}}>{users.title}</h1> 
            <h3>{users.descripcion}</h3>
            <h3 style={{color : 'green'}}>{users.precio}</h3>
            <button onClick={()=> compra(users.id)} style={{background: "white",
          width :'20%',
          border: "none",
          padding: "9px",
          color: "grey",}}>enviar</button>
            </div>
            </div>

    </div>

    )
    })) 
    :null}
    </>
    )
}
export default Mostrarjuegos