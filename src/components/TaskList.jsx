// import { tasks as data } from "./tasks";
// import { useState, useEffect } from "react";
import TaskCard from './TaskCard'
import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskList() {

  const {tasks} = useContext(TaskContext)

  // const [tasks, setTask] = useState([]);
  // useEffect(() => {
  //   setTask(data);
  // }, []);

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>NO HAY TAREAS</h1>;
  }
  return (
    <>
        <h1>Tareas</h1>
      <div className='grid grid-cols-4 gap-2'>
      
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
        // <div key={task.id}>
        //   <div>
        //     <h2>{task.title}</h2>
        //     <p>{task.descripcion}</p>
        //   </div>
        
      ))}

      </div>

    </>
  );
}

export default TaskList;
