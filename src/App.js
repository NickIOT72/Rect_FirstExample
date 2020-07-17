import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import tasks from './sample/tasks.json'

// Importar librerias
import Tasks from './components/Tasks.js'
import TaskForm from './components/Taskform.js' 

/*function HelloWorld(props) {
  return (
    <div id ="Hello" >
      <h3>{props.subtitle}</h3>
      {props.myText}</div>
  )
}

const App = () => <div> This is my component: <HelloWorld/> </div>

class HelloWorld extends React.Component{

  state ={
    show: true
  }

  toggleshow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show){
      return <div id ="Hello" >
    <h3>{this.props.subtitle}</h3>
    {this.props.myText}
    <button onClick={this.toggleshow} >Toggle Show </button>
    </div>
    }
    else{
      return <h1>
        No hay Elementos
        <button onClick={this.toggleshow}>
          Toggle Show
        </button>
        </h1>
    }
    
  }
}

function App() {
  return (
    <div>
      This is my component: <HelloWorld myText="Hello Fazt" subtitle="loremp ispum" />
      <HelloWorld myText="Hola Mundo" subtitle="loremp ispum"/> 
      <HelloWorld myText="Hello!!" subtitle="loremp ispum"/> 
      </div>
    
  );
}*/

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    return <div>
      <TaskForm/>
      <Tasks tasks= {this.state.tasks}/>
    </div>
  }
} 

export default App;
