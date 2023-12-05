import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./components/tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(tasktTitle) {
    setTasks([
      ...tasks,
      {
        title: tasktTitle,
        id: tasks.length,
        descripcion: "Nueva tarea"
      }
    ]);
  }

  // function createTask({taskTitle}){
  //   setTasks([...tasks, {
  //     title: taskTitle,
  //     id: tasks.length,
  //     descripcion: "nueva tarea"
  //   }])
  // }
  return (
    <>
      <TaskForm createTask={createTask} />
      <hr />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
