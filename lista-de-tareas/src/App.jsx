import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from "./components/Form"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskList } from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
      <Form
      tasks={tasks}
      setTasks={setTasks}
       /> 
      <TaskList
        tasks={tasks}
       />   
      </div> 
    </div>
  )
}

export default App
