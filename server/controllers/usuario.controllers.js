import { pool } from "../db.js";
export const registro = async (req, res) => {
  const { nombre, numero, correo, contraseña } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO usuario(nombre,numero,correo,contraseña) VALUES(?,?,?,?)",
      [nombre, numero, correo, contraseña]
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
    return res.json("logeado")
    }else{
    return res.json("No logueado")
    }
    
 
} catch (error) {
 
}

}
console.log("correo");