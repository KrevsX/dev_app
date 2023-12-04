import React from "react";
import ReactDOM from "react-dom/client";
import { Saludos, Prueba } from "./Prueba"; //funcion junto s a una forma de exportacion de funciones.
import { Productos, UserCard } from "./Productos";
import { Boton } from "./boton";
import {TaskCard } from "./Task"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <TaskCard ready={false}/>


    {/* <Boton text="click me"/>
    <Boton text="Pay"/>
    <Boton text="Go to"/>
    <Boton text={[1,2,3]}/> */}

    {/* <Boton text={true}/> */}

    {/* <UserCard
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
    /> */}
  </>
);
