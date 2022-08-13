import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from './Components/ListContainer/ItemListContainer';
import ItemDetailsContainer from './Components/DetailContainers/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import CartCustomProvider from './Components/CartContext/CartContext';
import Formulario from './Components/Cart/Formulario';

function App() {
  return (
    <BrowserRouter>
    <CartCustomProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/product/:productId' element={<ItemDetailsContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/formulario' element={<Formulario/>}/>
    </Routes>
    </CartCustomProvider>
    </BrowserRouter>
  );
}

export default App;
