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
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="txt-gray-500 text-sm">{task.descripcion}</p>
      <button
        className="bg-red-500 px-1 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
