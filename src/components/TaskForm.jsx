import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu Tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Escriba la description"
      onChange={(e)=>setDescription(e.target.value)}
      value={description}
      ></textarea>

      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
