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
