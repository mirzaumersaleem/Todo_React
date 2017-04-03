import React,{Component} from 'react';
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
                     {item}  <button onClick={this.deleteEntry.bind(this,index)}> delete</button>
                     
                </li>
            }
            )
        )
    }
     setLocalStorage(){    
         localStorage.setItem("item",JSON.stringify(this.state.arr))}
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
               <button onClick={this.addValue.bind(this)} >Add </button></form>

         {this.getlist()}
        
     </ul>
     <button onClick={this.deleteall.bind(this)}> Delete All</button>
     
     
     </div>
    );
}
}
export default Demo;