import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar.js'
import Greeting from './Components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <Greeting saludo="Bienvenidos a la mejor vinoteca de la provincia"/>
    </>
  );
}

export default App;
