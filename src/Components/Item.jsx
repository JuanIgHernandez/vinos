import { Padding } from "@mui/icons-material";
import React from "react";

const divStyle = {
    
    width:200,
    backgroundColor: 'grey',
    display:'flex',
    justifyContent:'center',
    marginLeft: '45%',
    fontSize: 25,
    paddingBottom: 10,
    

}
const divStyle2 = {
    width:200,
    backgroundColor: 'grey',
    display:'flex',
    justifyContent:'center',
    marginLeft: '45%',
    paddingBottom: 40,
    fontSize: 20,
}


export const Item = ({element})=>{
    return(
        <>
        <div style={divStyle}>
            <h3>{element.Nombre}</h3>
        </div>
        <div style={divStyle2}>
            <h2>{element.Precio}</h2>
        </div>
        <div>
            <img src={element.img} alt="" />
        </div>
        </>
    )
}