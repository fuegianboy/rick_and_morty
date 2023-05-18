import React from 'react';
import axios from "axios"

import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';


//import characters, { Rick } from './data.js';
import {useState} from "react"
import { Routes, Route } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([])

   // const example = {
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };

   // const onSearch = (data) =>{
   //    setCharacters([...characters, example])
   // }
   
   const onSearch = id =>  {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id => {
      //const { value } = id.target
      setCharacters(characters.filter((char)=>char.id !== id))  
   }
   


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <hr />
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>

         </Routes>

         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
