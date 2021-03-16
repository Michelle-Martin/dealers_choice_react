const {syncAndSeed, model, Todo, conn, App} = require('./db')
const express = require('express');
const path = require('path')
const { EvalDevToolModulePlugin } = require('webpack');
const toDoApp = express();
toDoApp.use('/dist', express.static(path.join(__dirname, 'dist')))
toDoApp.get('/todolist', async(req,res,next)=> {
    try {
        res.send(await Todo.findAll())
    }
    catch(ex){
        console.log(ex)
    }
    next()
})

toDoApp.get('/', (req,res,next)=> 
    res.sendFile(path.join(__dirname, 'index.html')))

const init = async()=> {
    await conn.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    toDoApp.listen(port, ()=> `app is listening on port ${port}`)
}

init()
