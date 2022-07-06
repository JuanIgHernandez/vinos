import React from "react";

const ItemDetail = ({ product }) => {
    return(
        <>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
        </>
    )
}

export default ItemDetail