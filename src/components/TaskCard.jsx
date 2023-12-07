// import TaskContext from "../context/TaskContext";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  // const valor = useContext(TaskContext)

  // console.log(valor)
  // function mostrarAlerta(){
  //     alert(task.id)

  
  // }
  return (
    <div className="p-4 text-white bg-gray-800 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm txt-gray-500">{task.descripcion}</p>
      <button
        className="px-1 py-1 mt-4 bg-red-500 rounded-md hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
