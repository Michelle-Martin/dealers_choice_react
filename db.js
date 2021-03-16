console.log('hello world')
const Sequelize = require('sequelize')
const {STRING} = Sequelize


const conn = new Sequelize(proess.env.DataBase_URL)||'postgres://localhost/todo'

const express = require('express')
const toDoApp = require('express')
Todo = conn.define('todo', {
    id: {
        type: STRING,
        primaryKey: true
    }, 
    task: {
        type: STRING
    }, 

})

const syncAndSeed = async()=> {
await conn.sync({force:true});
const [task1, task2, task3] = await Promise.all([
    Todo.create({id:1, task: "Walk the Dog"}),
    Todo.create({id:2, task: "Grocery shopping"}),
    Todo.create({id:3, task: "Read my book"})
]
)
}

const init = async()=> {
    await conn.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    toDoApp.listen(port, ()=> `app is listening on port ${port}`)
}

init()