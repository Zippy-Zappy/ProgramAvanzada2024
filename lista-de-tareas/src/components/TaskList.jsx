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
            // onDelete={() => setTasks(tasks.filter(t => t.id !== task.id))}
            />
        ))}
      </div>
    )
}