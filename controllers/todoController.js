const {todoModel} = require("../Models/todo.model")

// todo post route 

module.exports.saveTodo = async (req,res)=>{
    const payload = req.body;
    try {
        const newTodo = new todoModel(payload)
        await newTodo.save();
        res.send("ToDo List Save")
    } catch (error) {
        console.log(error);
        res.send({"massage":"something went wrong when we create the post"})
    }
}

// Get router 

module.exports.getTodo = async(req,res)=>{
    const getToDo = req.query
    try {
      const  NewTodo = await todoModel.find(getToDo)
        res.send(NewTodo)
    } catch (error) {
        console.log(error)
        res.send({"massage":"something went wrong while get route"})
    }
}

// patch router

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    todoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}

// module.exports.updateTodo = async(req,res)=>{
//     const id = req.params.id;
//     const payload = req.body;
//     const todo = await todoModel.findOne({"_id":id});
//     const userId_in_Todo = todo.todoId;
//     const userId_making_req = req.body.todoId;


//     try {
//         if(userId_making_req!==userId_in_Todo){
//             res.send({"massage":"You are not authorized"})
//         }else{
//             const todo = await todoModel.findOneAndUpdate({_id:id},payload)
//             res.send({"massage":"The update has been done"})
//         }
        
//     } catch (error) {
//         console.log(error)
//         res.send({"massage":"something went wrong while the patch route"})
//     }
// }

// delete Route


module.exports.TodoDelete = (req, res) => {
    const { _id, text } = req.body;

    todoModel
        .findByIdAndDelete(_id, { text })
        .then(() => res.set(201).send("Delete Successfully..."))
        .catch((err) => console.log(err));
}


// module.exports.TodoDelete = async(req,res)=>{
//     const id = req.params.id;
//     const todo = await todoModel.findOne({"_id":id});
//     const todoId_in_todo = todo.todoId;
//     const todoId_in_req = req.body.todoId;

//     try {
//         if(todoId_in_req!==todoId_in_todo){
//             res.send({"massage":"You are not authorized"})
//         }else{
//             const todo = await todoModel.findOneAndDelete({_id:id})
//             res.send({"massage":"The delete has been done successfully"})
//         }
//     } catch (error) {
//         console.log(error)
//         res.send({"massage":"something wrong with Delete Route"})
        
//     }
// }