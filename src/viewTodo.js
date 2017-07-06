import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
class ViewTodo extends Component{
    constructor(){
        super();
                
                
    }

   getlist(){
        return (
            
            this.props.arr.map((item, index) => {
                return <li key={index} >
                     {item}  <Button bsStyle="success" bsSize="small" onClick={this.deleteEntry.bind(this,index)}> delete</Button>
                     
                </li>
            }
            )
        )
    }
    setLocalStorage(){    
        localStorage.setItem("item",JSON.stringify(this.props.arr))
    }
    deleteEntry(index){
        this.props.arr.splice(index,1);
        this.setLocalStorage() ;
        this.setState({
            arr:this.props.arr
        })
    
    }
 
  deleteall(){
      this.props.arr.splice(0,5)
      this.setLocalStorage()
      
    this.setState({
    arr:this.props.arr

    })

  }
 render(){
return(

    <div>
 <h1> hello from view !</h1>
   {this.getlist()}
 </div>
);

 }


}
export default ViewTodo;