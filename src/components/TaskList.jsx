import React from "react";
import { task as data } from "./task";
import { useState, useEffect } from "react";

function TaskList() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);

  if (task.length === 0) {
    return <h1>NO HAY TAREAS</h1>;
  }
  return (
    <div>
      <div>TaskList</div>
      <h1>Tareas</h1>
      {task.map((task) => (
        <div key={task.id}>
          <div>
            <h2>{task.title}</h2>
            <p>{task.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
