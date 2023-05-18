import React from 'react';
import estilos from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card(props) {
   
   return (
      <div className={estilos.divCard}>
         <div>
            <button onClick={()=> props.onClose(props.id)}>X</button>
            {/* <button onClick={props.onClose}>X</button> */}
         </div>
         <Link to={`/detail/${props.id}`}>
         <div>
            <h2>{ props.name }</h2>
            <h2>{ props.status }</h2>
            <h2>{ props.species }</h2>
            <h2>{ props.gender }</h2>
            <h2>{ props.origin }</h2>
         </div>
         {/* <h2>{ props.origin.name }</h2> */}
         <img src={props.image} alt='Imagen' />
         </Link>
      </div>
   );
}
