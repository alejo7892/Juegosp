import axios from "axios";

export const registrous=async(form)=>{
    return  await axios.post('http://localhost:4000/registro',form)
  }
export const Loginus = async(form) =>{
  return await axios.post('http://localhost:4000/iniciarsesion',form)
}