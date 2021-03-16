const {syncAndSeed, models, conn} = require('./db')
const express = require('express');
const { EvalDevToolModulePlugin } = require('webpack');
const toDoApp = express();
toDoApp.get('/todolist', async(req,res,next)=> {
    const html = `<html> 
    <h1>
    Hello
    </h1>
    </html>`
    try {
        res.send(html)
    }
    catch(ex){
        console.log(ex)
    }
    next()
})



const init = async()=> {
    await conn.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    toDoApp.listen(port, ()=> `app is listening on port ${port}`)
}

init()
