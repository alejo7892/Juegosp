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
  const {correoUs} = req.body
  try {
    const [result] = await pool.query(
      "SELECT *  FROM juegos WHERE id NOT IN (SELECT id_juego FROM mis_juegos WHERE correo_persona = ?)" , [correoUs]
    )
   return res.json(result)
  } catch (error) {
    console.log(error);
  }
  
};
export const misjuegos =  async (req, res) => {
  const {correoUs,id_juego}= req.body
  try {
    const [result] = await pool.query(
      "INSERT INTO misjuegos (correo_persona, id_juego) VALUES (?,?)", [correoUs,id_juego]
    )
   return res.json(result)
  } catch (error) {
    console.log(error);
  }
  
};
export const miscompras =  async (req, res) => {
const {correoUs} = req.body
  try {
    const [result] = await pool.query(
      "SELECT juegos.* FROM juegos,usuario,misjuegos WHERE usuario.correo= misjuegos.correo_persona AND juegos.id= misjuegos.id_juego AND usuario.correo = ? ", [correoUs]
    )
   return res.json(result)
  } catch (error) {
    console.log(error);
  }
  
};