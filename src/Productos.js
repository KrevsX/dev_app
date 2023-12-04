export function Productos({ title, name = "User" }) {
  console.log(title, name);
  return (
    <h1>
      {title}dice {name}
    </h1>
  );
}

export function UserCard({name, amount, married, address, greet}) {
  return (
    <div>
      <h1>User Card</h1>
      <p>{name}</p>
      <p>$ {amount}</p>
      <p>{married ? "Casado" : "Soltero"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
