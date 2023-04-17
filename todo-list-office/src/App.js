import React from "react";
import './App.css'

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    cart:[],
      title: ''
    }
  }

  handleChange =(e)=>{
    this.setState({title:e.target.value})
  };
  handleAdd = () =>{
    if(this.state.title !== ''){
      const item = [...this.state.cart, this.state.title]
      this.setState({cart:item, title:''})
    }
  }
  Remove = (id)=>{
    const olditem = [...this.state.cart];
    const cart = olditem.filter((element, i)=>{
      return i !== id;
      

    })

    this.setState({cart:cart})
  }
  handleEdit = (value) =>{
     <input type="text" value={value}/>
  }

  render(){
    return(
      <>
       <div className="header"><h1>This is my todo</h1></div>
       <div className="add-todo">

       <div >
        <label  htmlFor="add-task">Add task: </label> <input className="input" id="add-tak" type="text"
         value={this.state.title} onChange={this.handleChange}/> <button className="btn" onClick={this.handleAdd}>+</button> 
        </div>
         </div>
         <div className="cart-container">
        
            {
              this.state.cart.map((element, i)=>{
               return  <div className="card">
                
                 <h4 key={i} id={i}>{element}</h4> <button onClick={()=>{this.Remove(i)}}  >x</button> <button onClick={()=>{this.handleEdit(element)}}>edit</button>
                </div>
              })
            }

              </div>

            </>
        
    )
  }
}


export default App;
