import { fontSize } from "@mui/system";
import React from "react";
const titleStyle = {
    width:500,
    fontSize:20,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'Brown'
}
const divStyle = {
    backgroundColor:'aqua',
    width:500,
    margin:50,
    
}
const imgStyle = {
    width:400,
    height:200,
    paddingLeft:100

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
            <div>
                <h2>
                   ${product.price}
                </h2>
            </div>
                <button>Ver Detalles</button>
        </div>
    )
}

export default Item