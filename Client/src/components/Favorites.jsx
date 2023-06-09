import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { removeFav } from '../redux/action';
//import { useState } from 'react';

function Favorites(props) {

    function closeFavorites(id) {
        props.onClose(id)
        removeFav(id)
    }
   
    return (
        <div >
            { 
                props.myFavorites.length &&
                props.myFavorites.map((caracter,index) => {
                    // <div key={index}>
                    return (
                        <Card
                        key={index}
                        id={caracter.id}
                        name={caracter.name}
                        status={caracter.status}
                        species={caracter.species}
                        gender={caracter.gender}
                        origin={caracter.origin.name}
                        image={caracter.image}
                        onClose={props.onClose}
                        />
                    )                
                }
                )
            }
        </div>
    );
}

//************************ */
function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}
function mapDispatchToProps(dispatch){
    return {
        removeFav: (id) => dispatch(removeFav(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)