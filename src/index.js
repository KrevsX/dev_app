import React from "react";
import ReactDOM from "react-dom/client";
import { Saludos, Prueba } from "./Prueba"; //funcion junto s a una forma de exportacion de funciones.
import { Productos, UserCard } from "./Productos";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Kevin Alas"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{street: "123 Main Street", city: "new York"}}
    />
  </>
);
