import './App.css';
import React, { Component} from 'react';
import Tasks from './components/TaskList/Tasks';
import Task from './components/TaskList/Task';

class App extends Component {
  constructor(props){
    super(props);
    this.inputElementRef= React.createRef();
    this.state={
      tasks: [],
      disabled: [],
      edit: false
    };
    this.taskName="";
    this.editIndex=0;
  }
  submitTask = (event) =>{
    // console.log("abcd is " + document.getElementById("taskName").innerHTML)
    let task = [
      ...this.state.tasks
    ]
    task.push(this.taskName)
    let disabledArr= [
       ...this.state.disabled
    ]
    disabledArr.push(false)
    this.setState({tasks: task, disabled: disabledArr})
    console.log(this.tasks)
    this.taskName="";
    // this.mainInput.value="";
    // document.querySelector("input").value="";
    this.inputElementRef.current.value="";
    
  }
  deleteTask=(task)=>{
    let taskArr= [
      ...this.state.tasks
    ]
     const i= taskArr.findIndex(t => t===task)
     console.log(i);
     taskArr.splice(i, 1)
     this.setState({tasks: taskArr})
    console.log("deleta called");
  }
  editTask=(task)=>{
    this.inputElementRef.current.value= task;
    let taskArr= [
     ...this.state.tasks
    ]
    const i= taskArr.findIndex(t => t===task)
    this.editIndex= i;
    this.inputElementRef.current.focus();
    // this.deleteTask(task);
    this.taskName= task;
    this.setState({edit: true})
    console.log(this.taskName)
  }
  addName=(event) => {
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
  editTaskName=(event)=>{
    let task = [
      ...this.state.tasks
    ]
    task[this.editIndex]= this.taskName;
    this.setState({tasks: task})
    console.log(this.tasks)
    this.taskName="";
    // this.mainInput.value="";
    // document.querySelector("input").value="";
    this.inputElementRef.current.value="";
    
  }
  render(){
    let taskList= null;
    if(this.state.tasks.length >= 1){
      console.log("my l is 1")
      taskList = this.state.tasks.map((task, index) => {
        
        return (<Task 
          checked={this.checked.bind(this, task)} 
          disabled={this.state.disabled[index]} 
          tName={task} edit={this.editTask.bind(this, task)} 
          key={index} delete={this.deleteTask.bind(this, task)} />)
      })
    }

  return (
    <div className="App">
      <p style={{fontSize : "60px", color: "violet"}}>Add New Task</p>
      <input style={{width : "40%", height: "40px", fontSize: "20px"}} 
      
      ref= {this.inputElementRef}
      type="text" id="abc" onChange={this.addName} />
      {!this.state.edit ? 
      <button  style={{fontSize : "20px", color: "red", height: "40px"}} onClick={this.submitTask}>SUBMIT</button>
      : <button style={{fontSize : "20px", color: "red", height: "40px"}} onClick={this.editTaskName}>EDIT</button>}
      <Tasks>
        {taskList}
      </Tasks>
    </div>
  );
}
}

export default App;
