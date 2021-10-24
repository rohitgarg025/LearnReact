import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {

  // state to toggle new task option
  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([])

  //Fetch Tasks

  useEffect(() => {
      //Get data from json data
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }


    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Fetch a particular task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks,data])
  
    // const id = Math.floor(Math.random()*10000) + 1
    // const newTask  = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {
    //make a delete request before we filter through UI
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'DELETE'
    })
    console.log(id);
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  //Toggle the Reminder
  const toggleReminder = async (id) => {
    
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle,reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(updatedTask)
    })

    const data = await res.json() 

    setTasks(
      tasks.map((task) => task.id === id ? {...task,reminder:data.reminder} : task)
    )
  }

  return (
    <div className="container">
      <Header title = "Task Tracker" onAdd = {() => {setShowAddTask(!showAddTask)} } onShowAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : "No Tasks to show"}
    </div>
  );
}

export default App;

// const headingStyle = {
//   color : "red",
//   backgroundColor : "black"
// }


/*
  REQUIREMENTS:
    1) TOGGLE ADD A TASK OPTION [7:44 AM]
    2) 

*/