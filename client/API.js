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
export const catalogo = async(params) =>{
  return await axios.post('http://localhost:4000/catalogo', params)
}
export const misjuegos = async(params) =>{
  return await axios.post('http://localhost:4000/misjuegos', params)
}
export const miscompras = async(params) =>{
  return await axios.post('http://localhost:4000/miscompras', params)
}