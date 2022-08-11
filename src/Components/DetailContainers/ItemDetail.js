import React from "react";
import { ItemCount } from "../ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ButtonFStyle = {
    backgroundColor: 'blue',
    color: 'white',
    height: 60,
    width: 100,
    marginLeft: 200,

}
const StyleImg = {
    width:400,
    height:400,
}
const StyleTitle = {
    padding: 40,
    width:500,
    fontSize:30,
    textTransform: 'uppercase',
    fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
}
const StyleDiv = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}
const descriptionStyle = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Times New Roman, Times, serif',

}
const StylePrice = {
  display: 'flex',
  justifyContent: "center",
  fontSize:40,
  padding: 60,
}

const ItemDetail = ({ product }) => {

    const [buyFinalized, setBuyFinalized] = useState(false)
    const { addProduct } = useContext(CartContext);

    const onAdd = (cuenta) => {
        addProduct({...product, qty: cuenta});
        setBuyFinalized(true);
      }

    return(
        <div style={StyleDiv}>
        
          <img style={StyleImg} src={product.image} alt={product.title} />
        <div>
          <h2 style={StyleTitle}>{product.title}</h2>
          <p style={descriptionStyle}>{product.description}</p>
          <h2 style={StylePrice}>${product.price}</h2>
          {buyFinalized
            ? <Link to="/cart">
              <button style={ButtonFStyle}>Finalizar compra</button>
              </Link>
            : <ItemCount Initial={1} Stock={5} onAdd={onAdd} />}
        </div>
        </div>
    )
}

export default ItemDetail