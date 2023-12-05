function TaskCard({task}) {
    function mostrarAlerta(){
        alert(task.id)
    }
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.descripcion}</p>
      <button onClick={mostrarAlerta}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
