 import React,{Component} from 'react';
//import newClass from './newClass';

 import logo from './logo.svg';
import './App.css';
 import AddTodo from './add_todo';

 class App extends Component {
   render() {
     return (
     
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO Application</h2>
        </div>
       <AddTodo/>
      
       </div>
     );
   }
 }
 export default App;
