import axios from "axios";

export const registrous=async(form)=>{
    return  await axios.post('http://localhost:4000/registro',form)
  }
export const Loginus = async(form) =>{
  return await axios.post('http://localhost:4000/iniciarsesion',form)
}

export const Crearjuegos = async(form) =>{
  return await axios.post('http://localhost:4000/crearjuegos',form)
}
export const catalogo = async() =>{
  return await axios.get('http://localhost:4000/catalogo')
}