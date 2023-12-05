import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Saludos, Prueba } from "./Prueba"; //funcion junto s a una forma de exportacion de funciones.
import { Productos, UserCard } from "./Productos";
import { Boton } from "./boton";
import {TaskCard } from "./Task"
import {Saludar} from "./Saludar"
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange =(e)=>{
  console.log(e.target.value)
}

const user = [
  {
    id: 1,
    name: "Kevin Alas",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "RipVan",
    image: "https://robohash.org/user2",
  },

  {
    id: 3,
    name: "Orem",
    image: "https://robohash.org/user3",
  },

  {
    id: 4,
    name: "TEst",
    image: "https://robohash.org/user4",
  },
];

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [ counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log('render');
  },[counter])
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>
      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Incrementar</button>
      <hr/>
      {/* Contador */}
      <h1>CONTADOR: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        reiniciar
      </button>
      <hr/>
    </div>
  );
}

root.render(
  <>
    {/* Hooks Basicos useState */}
    <Counter />

    {/* Componentes Externos */}

    {user.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
          <hr/>
        </div>
        
      );
    })}

    {/* Consumo de API externa */}

    <Post/>

    <TaskCard ready={true}/>
  <Saludar/>
  <Boton text="salydar"/>
  <input id="hola" onChange={handleChange}/>
  <input onDoubleClick={(e)=>{console.log('dobleClick')}}/>
  <form onSubmit={(e)=>{
    e.preventDefault()
    // console.log('enviado')
    alert('Enviado')
  }}>
   <h1>Registro de usuarios</h1>
   <button>Enviar</button>
  </form>

    <Boton text="click me"/>
    <Boton text="Pay"/>
    <Boton text="Go to"/>
    <Boton text={[1,2,3]}/>

    <Boton text={true}/>

    <UserCard
      name="Kevin Alas"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{street: "123 Main Street", city: "California"}}
      greet={function() {alert('Hello')}}
    />

<UserCard
      name="Rip Mca"
      amount={1000}
      married={false}
      points={[15, 79.3, 15.2]}
      address={{street: "Blvd 78", city: "New York"}}
      greet={function() {alert('2nd card')}}
    />
    <Saludos/>
    <Prueba/>
    <Productos/>
  </>
);
