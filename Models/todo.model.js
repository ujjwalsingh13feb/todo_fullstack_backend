const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text:{
        type:String,
        require:true
    }
    
    
},{
    versionKey:false
})

const todoModel = mongoose.model("TodoApp",todoSchema)

module.exports={
    todoModel
}