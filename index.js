import cors from "cors"

import express from "express"

import Connection from "../server/dataBase/db.js"


import Route from "./Route/route.js";


const app = express();

const PORT = 8000;
app.use (express.json());

app.use(express.urlencoded({extended : true}))//doubt

app.use(cors())

app.use('/',Route)


Connection();
app.listen(PORT,(()=>{
console.log(`succesfully listen On port ${PORT}`)
}))