//nos permite utilizar todas las funcionalidades de React
import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//componente funcional
//con props para reutilizar y personalizar este componente
function Testimonio(props) {
  //devuelve jsx = js + html
  //contenedor principal que contiene una imagen y tres parrafos
  //con la comillas invertidas podemos añadir codigo js dentro de html, tal como se hace en la imagen
  //las comillas invertidas se llama literales y para añadir js hay que añadir $
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

//es necesario exportar el componente
//la exportanción default nos permite indicar que va a ser el único componente que se va a exportar de este archivo
export default Testimonio;
//con la exportación nombrada si podemos exportar varios elementos de un mismo archivo