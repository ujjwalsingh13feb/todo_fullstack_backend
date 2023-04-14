const express = require('express');

const {connection}= require('./config/db');

require('dotenv').config();
const {todoRoute} = require("./Routes/todo.routes")

const cors = require("cors")


const port = process.env.port;


const app = express();

app.use(express.json());
app.use(cors({
    origin:"*"
}))


// app.get('/',(req,res)=>{
//     res.send("WellCome To ToDo App")
// })

app.use('/',todoRoute)

app.listen(port,async()=>{
    try {
        await connection
        console.log("connected to DataBase")
    } catch (error) {
        console.log(`error while listening on port ${port}`)
    }
    console.log(`listeing on port ${port}`)
})

