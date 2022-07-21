import React from "react";
import { useContext } from "react";
import { CartContext} from "../CartContext/CartContext";
import { Link } from "react-router-dom";




const Cart = () => {
    

    const { products, qtyProducts } = useContext(CartContext) 
    
   



    return(
        <>
        {products.length===0
            ? <h1>Carrito vacio, Catalogo <Link to="/">Aqui</Link></h1>
            : <>{products.map(product => <div><h2 key={product.id}><img src={product.image} alt={product.title} />${product.title} ${product.price}{qtyProducts}</h2><button>X</button></div> )}</>
        }
        </>
        )
}

export default Cart