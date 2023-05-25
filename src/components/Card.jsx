import React, { useEffect } from 'react';
import estilos from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/action';
import { connect } from 'react-redux';
import { useState } from 'react';



function Card(props) {
   const [isFav, setIsFav] = useState(false)

   function handleFavorite(){
      if (isFav) {
         setIsFav(false)
         removeFav(props.id)
      } else{
         setIsFav(true)
         addFav(props)
      }
   }

   useEffect(()=>{
      props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
      })
   },[props.myFavorites])
   
   return (
      <div className={estilos.divCard}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
}
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

function mapDispatchToProp(dispatch){
   return {
      addFav: (ch)=> dispatch(addFav(ch)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

function mapStateToProp(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProp, mapDispatchToProp)(Card)
