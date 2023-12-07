import { tasks as data } from "../components/tasks";
import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //nos permitira la extraccion de un valor desde contexto
  // let x = 20;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.description
      }
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));

    // console.log(tasks)
    // console.log(taskId)
  }

  // function createTask({taskTitle}){
  //   setTasks([...tasks, {
  //     title: taskTitle,
  //     id: tasks.length,
  //     descripcion: "nueva tarea"
  //   }])
  // }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask
        // tasks: tasks,
        // deleteTask: deleteTask,
        // createTask: createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>

    //     <>
    //       <h1>Compomente Context</h1>
    // {props.children}
    //     </>
  );
}
