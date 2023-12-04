export function Prueba() {
    //     return <div>
    //         <h1>ESTO ES UN COMPONENTE</h1>
    //         <p>
    //             LOREM IPSUM
    //         </p>
    //     </div>
    // const name = 'Kevin'
    // return <h1>{name}</h1>
  
    // condicional convencional
    //   const married = false;
    // if(married){
    //     return (<h2>Estado civil: Casado</h2>)
    // }
  
    //   return <h1>Estado Civil: {married ? "Casado" : "No Casado"}</h1>;
  
    const user = {
      firstName: "Kevin",
      lastName: "Alas",
    };
  
    function sumar(x, y) {
      return x + y;
    }
  
    return (
      <div>
        <h1>{user.firstName}</h1>
        <h2>{user.lastName}</h2>
        <h3>Suma de dos numeros: {sumar(5, 7)}</h3>
      </div>
    );
  }

export function Saludos(){

    const saludo = 'hOLAS DESDE ARCHIVO EXTERNO'

    const typeExport = 'OTRO TIPO DE EXPORTACION'

    return <>
    <h1>{saludo}</h1>
    <h2>{typeExport}</h2>
        
    </>
}
