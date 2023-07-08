import Todo from "../model/Todo.js"

const getAllTodo = async (req,res) => {
    console.log(req.body,"fghjkl")
  try{ 

    
    
    const todos = await Todo.find({}).sort({"createAt": -1});
    console.log(todos,"final todos")

    res.status(200).json(todos)
}
    catch(e){
        res.status(500).json(e.message)
    }
}

 const addTodo = async (req,res) => {
    console.log(req.body,"fghjkl")
  try{ const newTodo = await Todo.create({
        data: req.body.data,
        createAt: Date.now()
    })

    await newTodo.save()
    console.log(req.body)

    res.status(200).json(newTodo)
}
    catch(e){
        res.status(500).json(e.message)
    }
}


export {getAllTodo,addTodo}

