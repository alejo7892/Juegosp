import { pool } from "../db.js";
export const registro = async (req, res) => {
  const { nombre, numero, profesion, correo, contraseña } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO usuario(nombre,numero,profesion,correo,contraseña) VALUES(?,?,?,?,?)",
      [nombre, numero,profesion, correo, contraseña]
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req,res) =>{
const {correo, contraseña} = req.body

try {
  const [result] = await pool.query(
    "SELECT * FROM usuario WHERE correo = ? AND contraseña = ?", [correo,contraseña]
  )
  if (result.length !=0) {
    return res.json(result)
    }else{
    return res.json("No logueado")
    }
    
 
} catch (error) {
 
}

}
console.log("correo");

export const crearjuegos = async(req,res) =>{
  const {imagen, titulo,descripcion,precio} = req.body
  try {
    const [result]= await pool.query(
      "INSERT INTO juegos(imagen,title,descripcion,precio) VALUES(?,?,?,?)", [imagen,titulo,descripcion,precio]
    )
    res.json(result)
  } catch (error) {
    console.log(error);
  }

}
export const catalogo =  async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM juegos"
    )
   return res.json(result)
  } catch (error) {
    console.log(error);
  }
  
};