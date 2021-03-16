const app = document.querySelector('#app')
 class App extends React.Component{
   constructor(){
       super();
       this.state = {
           myItems
       };
   }
    render(){
        const {myItems}=this.state
       return (
           <div>
            <h2> You have {myItems.length} items to complete </h2> 
            <ul> 
                {
                myItems.map(
                (item, idx)=> <li key = {idx}> {item }</li>)
                }
                </ul>
             </div>
       )
   }}
const myItems = ["Walk the Dog","Grocery Shop","Pay Bills"];
ReactDOM.render(<App />, app);

  