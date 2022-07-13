import React from "react";
import { ItemCount } from "../ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ButtonFStyle = {
    marginLeft: '50%',
    backgroundColor: 'blue',
    color: 'white',
    height: 50,
    width: 100,
}

const ItemDetail = ({ product }) => {

    const [buyFinalized, setBuyFinalized] = useState(false)
    const onAdd = () => {
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
          : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
        </>
    )
}

export default ItemDetail