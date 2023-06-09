import React from 'react';
import estilos from "./SearchBar.module.css";
import {useState} from "react"
export default function SearchBar(props) {
   // console.log(props)
   
   const [id, setID] = useState("")

   const handleChange = event=> {
      const {value} = event.target
      setID(
         value
      )
   } 

   return (
      <div className={estilos.divSearchBar}>
         <input 
            className={estilos.input} 
            type='text'
            name="search"
            id="search"
            onChange={handleChange} />
         <button className={estilos.button} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
