import PropTypes from "prop-types";

export function Boton({text, name}) {
  console.log(text);

//   if(!text){
//     console.error('Texto Requerido')
//   }
  return   <div>
    <button onClick={function(){
    console.log('Disparador del boton')
  }}>
   {text} - {name}
    </button>;
    <hr/>
  </div>
}

Boton.propTypes = {
  text: PropTypes.string.isRequired
};

Boton.defaultProps = {
    name: 'A Declarar'
}