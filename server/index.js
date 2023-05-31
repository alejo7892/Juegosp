console.log("hello");

import  express  from 'express';
import {PORT} from './config.js'
import router from "./routes/usuario.routes.js";

import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
app.use(router)
app.listen(PORT);
console.log(`server run in port ${PORT}`);