const express = require("express");

const todoRoute = express.Router();
const {saveTodo,getTodo,updateToDo,TodoDelete} = require("../controllers/todoController")


todoRoute.get("/",getTodo)
todoRoute.post("/save",saveTodo)
todoRoute.post("/update",updateToDo)
todoRoute.post("/delete",TodoDelete)

module.exports = {
    todoRoute
}