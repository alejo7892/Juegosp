import {Router} from 'express';
import { registro } from '../controllers/usuario.controllers.js';
import { login } from '../controllers/usuario.controllers.js';
const router = Router();
router.post("/registro", registro)
router.post("/iniciarsesion", login)

export default router