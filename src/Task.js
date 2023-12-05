// export function TaskCard(){
//     const cardStyles = { background: '#202020', color:'#fff', padding: '20px' }
//     const titleStyle = { fontWeight: 'lighter' }
//     return <div style={cardStyles}>
//         <h1 style={titleStyle}>1ST Tarea</h1>
//         <p>Tarea Realizada</p>
//     </div>

// }

import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primera Tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </span>

      {/* <span
       style={ready ? { background: "green" } : { background: "red" }}
       >{ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </span> */}
      <div>
        <hr />
      </div>
    </div>
  );
}
