import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar.js'
import { ItemCount } from './Components/ItemCount';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from './Components/ListContainer/ItemListContainer';
import ItemDetailsContainer from './Components/DetailContainers/ItemDetailContainer';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/product/:productId' element={<ItemDetailsContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <ItemCount  Stock = {5}/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
