import { useState, useEffect } from "react";
import App from "../../App";
import Registro from "../Registro";
import Cjuegos from "../Cjuegos";
import { catalogo } from "../../../API";
const Catalogo = () => {
    const [form,setForm] = useState("")
    const [users,setUsers] =useState([])
    useEffect(()=>{

        const listLoad=async()=>{
           const response=await catalogo()
           
           setUsers(response.data)
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
     return (

        <>

<div class="containerLo">
        <nav>
            <span class="logo">JUEGOSPICHA</span>
            <ul>
                <li
                onClick={() => setForm("Inicio")}
                
                >INICIO</li>
                <li
                onClick={() => setForm("Crear juegos")}
                >Crear juegos</li>
                <li>Mis juegos</li>
                
            </ul>
        </nav>
        </div>
        {users.length != 0 ? (
        users.map((users,i)=>{
        return(
            
        <div key={users.id} className="cards">
        <div   style={{display:'flex',}}>
                <div  style={{border:'3px solid gray',width:'22%',height:'320%',padding:'10px',margin:'100px', position:'relative', top:'20px'}}>
                <img src={users.imagen} alt="" style={{width:'100%',height : '100%'}}/>
                <h1 style={{color:'blue'}}>{users.title}</h1> 
                <h3>{users.descripcion}</h3>
                {/* <p onClick={()=>compra(users.id)}>{users.id}</p> */}
                <h3 style={{color : 'green'}}>{users.precio}</h3>
                </div>
                </div>

        </div>
   
        )
        })) 
        :null}
        
    
        
      
    </>
 )
}

export default Catalogo