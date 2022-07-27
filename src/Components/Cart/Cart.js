import React from "react";
import { useContext } from "react";
import { CartContext} from "../CartContext/CartContext";
import { Link } from "react-router-dom";




const Cart = () => {
    

    const { products, qtyProducts, deleteProduct } = useContext(CartContext) 
    
   



    return(
        <>
        {products.length===0
            ? <h1>Carrito vacio, Catalogo <Link to="/">Aqui</Link></h1>
            : <>{products.map(product => <div><h2 key={product.id}><img src={product.image} alt={product.title} />${product.title} ${product.price}{qtyProducts}</h2><button onClick={()=> deleteProduct(product.id)}>X</button></div> )}</>
        }
        </>
        )
}

export default Cart