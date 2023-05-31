import {createPool} from 'mysql2/promise'

export const pool= new createPool({
    host: 'localhost',
    port: "3306",
    database: 'juegosp',
    password:'',
    user:'root'
});
