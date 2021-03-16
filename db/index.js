const Sequelize = require('sequelize')


const conn = new Sequelize(process.env.DataBase_URL ||'postgres://localhost/todo')

const Todo = conn.define('todo', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    }, 
    task: {
        type: Sequelize.STRING
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

// const init = async()=> {
//     await conn.authenticate();
//     await syncAndSeed();
//     const port = process.env.PORT || 3000;
//     toDoApp.listen(port, ()=> `app is listening on port ${port}`)
// }

// init()

module.exports = {
    models: {
        Todo
    }, 
    conn, 
    syncAndSeed
}