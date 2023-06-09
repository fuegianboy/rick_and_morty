import './App.css';
import axios from "axios"
import {useState} from "react"
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
//import Card from './components/Card.jsx';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx';
import Favorites from './components/Favorites.jsx';
//import characters, { Rick } from './data.js';

function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)
   const EMAIL = "ejemplo@gmail.com"
   const PASSWORD = "123456"

   const navigate = useNavigate()
   
   //------------------------------------
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true)
   //       navigate("/home")
   //    }
   // }
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   //------------------------------------------------

   useEffect(()=> {
      !access && navigate("/")

   }, [access])


   const onSearch = id =>  {
      // axios(`https://rickandmortyapi.com/api/character/${id}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
   
   const location = useLocation();
   const shouldShowNav = location.pathname !== '/';

   return (
      <div className='App'>
            {shouldShowNav && <Nav onSearch={onSearch} />}
         <hr />
         {/* <Nav onSearch={onSearch}/> */}
         <hr />
         <Routes>
            <Route exact path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
