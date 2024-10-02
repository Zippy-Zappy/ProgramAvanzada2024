import {useState} from "react"

export const Form = ({tasks, setTasks}) => {
    const [project, setProject] = useState("")
    const [typeTask, setTypeTask] = useState("")
    const [nameDev, setNameDev] = useState("")
    const [storyPoints, setStoryPoints] = useState("")
    const [priority, setPriority] = useState("")
    const [startDate, setStartDate] = useState("")
    const [summary, setSummary] = useState("")

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)

        if ([project, typeTask, nameDev, storyPoints, priority, startDate, summary].includes("")){
            console.log("No debe haber campos vacíos.")
            setError(true)
            return
        }

        const taskObject = {
            project,
            typeTask,
            nameDev,
            storyPoints,
            priority,
            startDate,
            summary
        }
        console.log(taskObject)
        //adds task to the state
        setTasks([
            ...tasks,
            taskObject
        ])

        //resets form
        setProject("")
        setTypeTask("")
        setNameDev("")
        setStoryPoints("")
        setPriority("")
        setStartDate("")
        setSummary("")
    }
  return (
        <div className="w-1/2">
        <h2 className="text-3xl text-center">Task List</h2>
    
        <p className="font-black text-lg mt-5 text-center mb-10">Add and manage {''}
        <span className="text-indigo-600 font-bold">tasks</span></p>
    
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">All fields are required</p> : null}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">Project name</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="project" 
           type="text" 
           placeholder="Name of the project"
           onChange={(e) => setProject(e.target.value)}
           value={project}
           />
      
    
        </div>
    
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeTask">Task Type</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="typeTask" 
           type="text" 
           placeholder="Type of task"
            onChange={(e) => setTypeTask(e.target.value)}
          value={typeTask}
           />
         
        </div>
    
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameDev">Developer name</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="nameDev" 
           type="text" 
           placeholder="Developer name"
           onChange={(e) => setNameDev(e.target.value)}
          value={nameDev}
           />
        </div>
    
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">Story points</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="storyPoints" 
           type="number"
            onChange={(e) => setStoryPoints(e.target.value)}
            value={storyPoints}
            />
        </div>
    
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">Priority</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="priority" 
           type="text"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
            />
    
        </div>
    
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">Start date</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="startDate" 
           type="date"
            onChange={(e) => setStartDate(e.target.value)}
           />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">Summary</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
           id="summary" 
           type="text"
          onChange={(e) => setSummary(e.target.value)}
          value={summary}
            />
    
        </div>
    
        <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
        type="submit">Add task</button>
    
        </form>
    
        </div>
    )        

}