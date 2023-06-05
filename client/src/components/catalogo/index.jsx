import { useState, useEffect } from "react";
import App from "../../App";
import Registro from "../Registro";
import Cjuegos from "../Cjuegos";
import Mostrarjuegos from "../showjuegos";
import { catalogo } from "../../../API";
import { misjuegos } from "../../../API";
import Cookie from "universal-cookie"
const Catalogo = () => {
    const cookie= new Cookie();
    const [form,setForm] = useState("")
    const [hecho,setHecho] = useState(true)
    const [users,setUsers] =useState([])

    async function  compra(idJuego) {
    const correoUs = cookie.get('NombreCookie')
    const info = {correoUs: correoUs,
                  id_juego : idJuego}

    const response = await misjuegos(info)
    }




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
        case "Misjuegos":
            return <Mostrarjuegos/>  
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
                <li
                 onClick={() => setForm("Misjuegos")}
                >Mis juegos</li>
                
            </ul>
        </nav>
        </div>
        
        {users.length != 0 ? (
        users.map((users,i)=>{
        
        return(

        <div key={users.id} className="cards">
        <div   style={{display:'flex',}}>
                <div  style={{border:'3px solid gray',width:'22%',height:'320%',padding:'10px',margin:'100px', position:'relative', top:'20px'}}>
                <img src={users.imagen} alt="" style={{height: '40%',width:'40%'}} />
                <h1 style={{color:'black'}}>{users.title}</h1> 
                <h3>{users.descripcion}</h3>
                {/* <p onClick={()=>compra(users.id)}>{users.id}</p> */}
                <h3 style={{color : 'green'}}>{users.precio}</h3>
                
                
                <button value={hecho}   onClick={()=> compra(users.id)}  style={{background: "white",
              width :'20%',
              border: "none",
              padding: "9px",
              color: "grey",}}  onSubmit={()=> setHecho("comprado")} >comprar</button>
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