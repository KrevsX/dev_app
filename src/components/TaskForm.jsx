import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} =useContext(TaskContext)

  // const valor= useContext(TaskContext)
  // console.log(valor)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description)
    createTask({
        title,
        description
    });
    setTitle('')
    setDescription('')
    
    // const newTask= {
    //     title
    // }
    // createTaks(newTask) 
    // console.log(newTask)
    // console.log(title);
  };

  
  return (
<div className="max-w-md mx-auto">
<form onSubmit={handleSubmit} className="p-10 mb-4 bg-slate-800">
  <h1 className="mb-3 text-2xl font-bold text-white">Crear Tarea</h1>
      <input
        placeholder="Escribe tu Tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="w-full p-3 mb-2 bg-slate-300"
      />
      <textarea placeholder="Escriba la description"
      onChange={(e)=>setDescription(e.target.value)}
      value={description}
      className="w-full p-3 mb-2 bg-slate-300"

      ></textarea>

      <button
      className="px-3 py-1 text-white bg-indigo-500 rounded-md">
        Guardar</button>
    </form>
</div>
  );
}

export default TaskForm;
