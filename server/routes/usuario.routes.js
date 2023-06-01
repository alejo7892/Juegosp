import {Router} from 'express';
import { registro } from '../controllers/usuario.controllers.js';
import { crearjuegos } from '../controllers/usuario.controllers.js';
import { login } from '../controllers/usuario.controllers.js';
import { catalogo } from '../controllers/usuario.controllers.js';
const router = Router();
router.post("/registro", registro)
router.post("/iniciarsesion", login)
router.post("/crearjuegos", crearjuegos)
router.get("/catalogo", catalogo)

export default router