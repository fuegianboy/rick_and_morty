import React from 'react';
import Card from './Card';
import estilos from "./Cards.module.css";

export default function Cards(props) {
   // const characters = props.characters
   // const dato = characters[0].name
   //console.log(characters[0].species)
   return (
      <div className={estilos.divCard} style={{ display: 'flex' }}> 
 {props.characters.map((caracter,index) => (
            <div  key={index} >
               <Card
                  id={caracter.id}
                  key={caracter.id}
                  name={caracter.name}
                  status={caracter.status}
                  species={caracter.species}
                  gender={caracter.gender}
                  // origin={caracter.origin.name}
                  image={caracter.image}
                  onClose={()=>props.onClose(caracter.id)}
               />
            </div>
         ))}
      </div>
   );
}