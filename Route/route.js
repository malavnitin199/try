import express from "express"

import {addTodo,getAllTodo} from "../Controller/todo.js";
const Route = express.Router();


Route.get("/t",getAllTodo)
Route.post('/t',addTodo)

export default Route;