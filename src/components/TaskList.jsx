// import { tasks as data } from "./tasks";
// import { useState, useEffect } from "react";


function TaskList(props) {
  // const [tasks, setTask] = useState([]);
  // useEffect(() => {
  //   setTask(data);
  // }, []);

  if (props.tasks.length === 0) {
    return <h1>NO HAY TAREAS</h1>;
  }
  return (
    <>
      <div>TaskList</div>
      <h1>Tareas</h1>
      {props.tasks.map((task) => (
        <div key={task.id}>
          <div>
            <h2>{task.title}</h2>
            <p>{task.descripcion}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskList;
