import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
class Demo extends Component
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
 databaseData(){

      this.todo =  this.state.arr;
      localStorage.setItem("item",JSON.stringify(this.todo));
  }

  getlist(){
        return (
            
            this.state.arr.map((item, index) => {
                return <li key={index} >
                     {item}  <Button bsStyle="success" bsSize="small" onClick={this.deleteEntry.bind(this,index)}> delete</Button>
                     
                </li>
            }
            )
        )
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
    deleteEntry(index){
       this.state.arr.splice(index,1);
      this.setLocalStorage() ;
        this.setState({
        arr:this.state.arr

  })

    }
 
  deleteall(){
      this.state.arr.splice(0,5)
      this.setLocalStorage()
      
this.setState({
  arr:this.state.arr

})

  }

    render(){
    return(
     <div>
   
     <ul>
         <form onSubmit={this.addValue.bind(this)}>
              <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)}/>
               <Button bsStyle="success" bsSize="large" onClick={this.addValue.bind(this)} >Add </Button></form>

         {this.getlist()}
        
     </ul>
     <Button bsStyle="danger"bsSize="large" onClick={this.deleteall.bind(this)}> Delete All</Button>
     
     
     </div>
    );
}
}
export default Demo;