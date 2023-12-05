// import { tasks as data } from "./tasks";
// import { useState, useEffect } from "react";
import TaskCard from './TaskCard'

function TaskList({tasks}) {
  // const [tasks, setTask] = useState([]);
  // useEffect(() => {
  //   setTask(data);
  // }, []);

  if (tasks.length === 0) {
    return <h1>NO HAY TAREAS</h1>;
  }
  return (
    <>
        <div>TaskList</div>
      <div>
      <h1>Tareas</h1>
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
