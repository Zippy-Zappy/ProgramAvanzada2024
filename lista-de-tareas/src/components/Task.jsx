export const Task = ({task, onDelete}) => {
    const {project,
        typeTask,
        nameDev,
        storyPoints,
        priority,
        startDate,
        summary} = task
    return (
        <div className="relative mx-5 my-10 bg-white shadow-md px-5 py-10 rouded-xl">
            <button className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded px-2 py-1"
            type="button"
            onClick={onDelete}
            >Delete</button>
        <p className="font-bold mb-3 text-gray-700 uppercase">Project: {''}
            <span className="font-normal normal-case">{project}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Task type: {''}
            <span className="font-normal normal-case">{typeTask}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Develeoper name: {''}
            <span className="font-normal normal-case">{nameDev}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
            <span className="font-normal normal-case">{storyPoints}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Priority: {''}
            <span className="font-normal normal-case">{priority}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Start date: {''}
            <span className="font-normal normal-case">{startDate}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Summary: {''}
            <span className="font-normal normal-case">{summary}</span>
        </p>
        </div>
    )
}