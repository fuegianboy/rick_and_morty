import React from 'react';
import estilos from "./About.module.css";

export default function About(props) {
   
   return (
      <div style={{backgroundColor: "LightGray"}}>
         <h1>Adrian Velazquez</h1>
         <h2>Licenciado en Absolutamente nada</h2>
         <h4>CopyRight 2023</h4>
         <img src="captura.jpg" alt='Aca falta un logo' />
         <img src="../../img/rutas.gif" alt="" />
      </div>
   );
}