import React from 'react';
import Card from './Card';

export default function Cards(props) {
   // const characters = props.characters
   // const dato = characters[0].name
   //console.log(characters[0].species)
   return (
      <div style={{ display: 'flex' }}> 
 {props.characters.map((caracter) => (
            <div  key={caracter.id}>
               <Card
                  id={caracter.id}
                  name={caracter.name}
                  status={caracter.status}
                  species={caracter.species}
                  gender={caracter.gender}
                  origin={caracter.origin.name}
                  image={caracter.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            </div>
         ))}
      </div>
   );
}