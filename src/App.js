import './App.css';
import React, { Component} from 'react';
import Tasks from './components/TaskList/Tasks';
import Task from './components/TaskList/Task';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks: [],
      disabled: [],
      edit: false
    };
    this.taskName="";
    this.editIndex=0;
  }
  addTask = (event) =>{
    if(this.taskName===""){
      alert("Please enter a valid task name");
    }
    else{
      let task = [
        ...this.state.tasks
      ]
      task.push(this.taskName)
      let disabledArr= [
        ...this.state.disabled
      ]
      disabledArr.push(false)
      this.setState({tasks: task, disabled: disabledArr})
      this.taskName="";
      document.querySelector("input").value="";
    }  
  }
  editTask=(event)=>{
    let task = [
      ...this.state.tasks
    ]
    task[this.editIndex]= this.taskName;
    this.setState({tasks: task})
    this.taskName="";
    document.querySelector("input").value="";
    
  }
  deleteTask=(task)=>{
    let taskArr= [
      ...this.state.tasks
    ]
     const i= taskArr.findIndex(t => t===task)
     taskArr.splice(i, 1)
     this.setState({tasks: taskArr})
  }
  editTaskName=(task)=>{
    document.querySelector("input").value=task;
    let taskArr= [
     ...this.state.tasks
    ]
    const i= taskArr.findIndex(t => t===task)
    this.editIndex= i;
    document.querySelector("input").focus();
    this.taskName= task;
    this.setState({edit: true})
  }
  addTaskName=(event) => {
    
    this.taskName = event.target.value;
  }
  checked=(task) =>{
    
    let taskArr= [
      ...this.state.tasks
    ]
     const i= taskArr.findIndex(t => t===task)
    let disabledArr= [
      ...this.state.disabled
    ]
    disabledArr[i]= !disabledArr[i]
    this.setState({disabled: disabledArr})
  }
  
  render(){
    let taskList= null;
    if(this.state.tasks.length >= 1){
      taskList = this.state.tasks.map((task, index) => {
        
        return (<Task 
          checked={this.checked.bind(this, task)} 
          disabled={this.state.disabled[index]} 
          tName={task} edit={this.editTaskName.bind(this, task)} 
          key={index} delete={this.deleteTask.bind(this, task)} />)
      })
    }

  return (
    <div className="App">
      <p style={{fontSize : "60px", color: "violet"}}>Add New Task</p>
      <input style={{width : "40%", height: "40px", fontSize: "20px"}} 
      type="text" 
      onChange={this.addTaskName} />
      {!this.state.edit ? 
        <button  style={{fontSize : "20px", color: "red", height: "40px"}} 
        onClick={this.addTask}>ADD</button>
      : <button style={{fontSize : "20px", color: "red", height: "40px"}} 
        onClick={this.editTask}>EDIT</button>
      }
      <Tasks>
        {taskList}
      </Tasks>
    </div>
  );
}
}

export default App;
