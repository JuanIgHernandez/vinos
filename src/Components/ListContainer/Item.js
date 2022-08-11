import { fontSize } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const titleStyle = {
    width:500,
    fontSize:30,
    textTransform: 'uppercase',
    fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'aquamarine',
}
const divStyle = {
    width:500,
    margin:50,
    
}
const priceStyle = {
    backgroundColor: 'aqua',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    fontSize:50,
    textTransform: 'uppercase',
}
const imgStyle = {
    width:400,
    height:230,
    paddingLeft:150,
    paddingRight:80

}

const Item = ({ product }) => {
    return(
        <div style={divStyle}>
            <div style={titleStyle}>
                <h2>
                {product.title}
                </h2>
            </div>
            <div>
                <img style={imgStyle} src={product.image} alt={product.title} />
            </div>
            <div style={priceStyle}>
                <h2>
                   ${product.price}
                </h2>
            </div>
            <div style={priceStyle} > 
                <Link to={`/product/${product.id}`}><button>Ver Detalles</button></Link>
            </div>
               
        </div>
    )
}

export default Item