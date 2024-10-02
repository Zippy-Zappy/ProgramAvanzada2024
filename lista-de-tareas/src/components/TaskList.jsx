import { Task } from "./Task"

export const TaskList = ({ tasks }) => {
    console.log(tasks)

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
        <h2 className="font-black text-3xl text-center">Task list</h2>
        <p className="text-xl mt-5 mb-10 text-center">Manage current {''} 
        <span className="text-indigo-600 font-bold">tasks</span> here
        </p>
  
        { tasks.map(task => (
            <Task 
            key={task.project}
            task={task}
            />
        ))}
        <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
        type="submit">Add task</button>
      </div>
    )
}