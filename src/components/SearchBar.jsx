import React from 'react';
import estilos from "./SearchBar.module.css";

export default function SearchBar(props) {
   // console.log(props)
   return (
      <div className={estilos.divSearchBar}>
         <input className={estilos.input} type='search' />
         <button className={estilos.button} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
