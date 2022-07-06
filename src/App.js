import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar.js'
import { ItemCount } from './Components/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Components/ListContainer/ItemListContainer';
import ItemDetailsContainer from './Components/DetailContainers/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <ItemListContainer/>
    <ItemCount  Stock = {5}/>
    <ItemDetailsContainer/>
    </BrowserRouter>
    </>
  );
}

export default App;
