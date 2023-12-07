import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { tasks as data } from "./components/tasks";
// import { useEffect, useState } from "react";

function App() {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  // function createTask(task) {
  //   setTasks([
  //     ...tasks,
  //     {
  //       title: task.title,
  //       id: tasks.length,
  //       descripcion: task.description
  //     }
  //   ]);
  // }

  // function deleteTask(taskId) {
  //   setTasks(tasks.filter(task => task.id !== taskId));

  //   // console.log(tasks)
  //   // console.log(taskId)
  // }

  // // function createTask({taskTitle}){
  // //   setTasks([...tasks, {
  // //     title: taskTitle,
  // //     id: tasks.length,
  // //     descripcion: "nueva tarea"
  // //   }])
  // // }

  return (
    <>
    <main className="bg-zinc-900">
      <div className="container mx-auto p-10">
      <TaskForm/>
    <TaskList/>

      </div>

    </main>


      {/* <TaskForm createTask={createTask} />
      <hr />
      <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
    </>
  );
}

export default App;
