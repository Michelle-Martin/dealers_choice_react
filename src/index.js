import React from 'react'
import ReactDOM from 'react-dom'
const app = document.querySelector('#app')
const Item = ({item, removeTask, idx})=> {
    return (
       <li> {item}
       <button onClick ={ () => removeTask(idx)} > Delete </button>
        </li>

    )
}
 class App extends React.Component{
   constructor(){
       super();
       this.state = {
           myItems
       };
       this.addTask = this.addTask.bind(this);
       this.removeTask = this.removeTask.bind(this);
   }
   addTask(){
      this.setState({myItems: [...myItems, "Car Wash"] });
        //    this.myItems.push(newTask)
    
   }
   removeTask(idx){
   const myItems = this.state.myItems.filter((_, _idx) => _idx !== idx)
   this.setState({myItems})
   }
    render(){
        const {myItems}=this.state
        const {addTask, removeTask} = this
       return (
           <div>
            <h2> You have {myItems.length} items to complete! </h2> 
         
            <ul>  
                {
                myItems.map(
                (item, idx)=> <Item key = {idx} idx = {idx} removeTask = {removeTask} item = {item} />)
                }
                </ul>

                <button onClick = {addTask} > Add Task </button>
             </div>
       )
   }}
const myItems = ["Walk the Dog","Grocery Shop","Pay Bills"];
ReactDOM.render(<App />, app);
export default App

  