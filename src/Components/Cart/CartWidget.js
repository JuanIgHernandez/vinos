import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
    const { qtyProducts } = useContext(CartContext);

    return (
      <>
        <ShoppingCartIcon color="black" fontSize="large" />
        <p>{qtyProducts}</p>
      </>
    )
  }


export default CartWidget