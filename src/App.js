import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar.js'
import Greeting from './Components/ItemListContainer';
import { ItemCount } from './Components/ItemCount';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemDetailContainer } from './Components/DetailContainers/ItemDetailContainer';

function App() {
  return (
    <>
    
    <NavBar/>
    <Greeting saludo="Bienvenidos a la mejor vinoteca de la provincia"/>
    <ItemListContainer/>
    <ItemCount  Stock = {5}/>
    </>
  );
}

export default App;
