import React from "react";
import { ItemCount } from "../ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ButtonFStyle = {
    marginLeft: '50%',
    backgroundColor: 'blue',
    color: 'white',
    height: 50,
    width: 100,
}

const ItemDetail = ({ product }) => {

    const [buyFinalized, setBuyFinalized] = useState(false)
    const { addProduct } = useContext(CartContext);

    const onAdd = (cuenta) => {
        addProduct({...product, qty: cuenta});
        setBuyFinalized(true);
      }

    return(
        <>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
        {buyFinalized
          ? <Link to="/cart">
            <button style={ButtonFStyle}>Finalizar compra</button>
            </Link>
          : <ItemCount Initial={1} Stock={5} onAdd={onAdd} />}
        </>
    )
}

export default ItemDetail