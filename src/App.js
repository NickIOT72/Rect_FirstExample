import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

//Import JSON
import tasks from './sample/tasks.json'

// Importar librerias
import Tasks from './components/Tasks.js'
import TaskForm from './components/Taskform.js'
import Posts from './components/Posts.js'

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

  addTask = (title, description) => {
    //console.log(title + " , " + description)
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return <div>
      <Router>
        
        <Link to="/post"> Post </Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone} />
          </div>;
        }}>
        </Route>
        <Link to="/">Home</Link>
        <Route path="/post" component={Posts} >
        </Route>
      </Router>
    </div>
  }
}

export default App;
