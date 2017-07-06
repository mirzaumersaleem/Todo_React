import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import {FormControl} from  'react-bootstrap';
 import ViewTodo from './viewTodo';
class AddTodo extends Component
{
     constructor(){
                super();
                var temp=JSON.parse(localStorage.getItem("item"));
                this.state={
                arr : temp ==null? [] : temp,
                inputText:'',
                temp1:''
                           }
                }
   setLocalStorage(){    
        localStorage.setItem("item",JSON.stringify(this.state.arr))
    }
 inputChange(changeValue){        
            this.setState(
			{inputText:changeValue.target.value});
    }
    addValue(event)
    {
    
         this.state.arr.push(this.state.inputText);
         this.setLocalStorage();
    
        this.setState({
          arr:this.state.arr,
         inputText:''
     
        })
        event.preventDefault();

    }
render(){
 return (
  <div>
   <h1>hello from Add !</h1>
   <form>
    <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)}/>
    <Button bsStyle="success" bsSize="large" onClick={this.addValue.bind(this)} >Add </Button></form>
  <ViewTodo arr={this.state.arr}/>
 </div>
 );
}

}
export default AddTodo;