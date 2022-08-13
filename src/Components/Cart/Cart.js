import React from "react";
import { useContext } from "react";
import { CartContext} from "../CartContext/CartContext";
import { Link } from "react-router-dom";



const Cart = () => {
    const CartStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    const itemStyle = {
        paddingTop:40,
        textTransform: 'uppercase',
        fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
    }
    const TotalStyle = {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        textTransform: 'uppercase',
        fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
        fontSize:30
    }
    const FinalizarStyle = {
        marginLeft: 600,
        marginTop: 60,
        padding:20,
        backgroundColor: 'blue',
        color:'white'
    }

    const { products,  deleteProduct, total } = useContext(CartContext)

    return(
        <>
        {products.length===0
            ? <h1>Carrito vacio, Catalogo <Link to="/">Aqui</Link></h1>
            : <>{products.map(product => <div style={CartStyle}><h2 style={CartStyle} key={product.id}><img src={product.image} alt={product.title} /></h2><h2 style={itemStyle}>{product.title}</h2> <h2 style={itemStyle}>${product.price}</h2><h2 style={itemStyle}>{product.qty}</h2><button onClick={()=> deleteProduct(product.id)}>X</button></div> )}
                <p style={TotalStyle}>TOTAL:${total}</p>
                <Link to="/formulario"><button style={FinalizarStyle}>FINALIZAR COMPRA</button></Link></>
        }        
        </>
        )
}

export default Cart