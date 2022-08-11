import React, { useState } from 'react'




const countStyle = {
    backgroundColor: 'aqua',
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: "center",
    marginLeft: 200,
}
const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    height: 50,
    width: 100,
    justifyContent: "center",
    marginLeft: 200,
}

export const ItemCount = ({ Stock, Initial = 1, onAdd }) => {
    const [cuenta, setCuenta] = useState(Initial)

    const sumar = () => {
      if (cuenta < Stock) {
        setCuenta(cuenta + 1);
    }
}
    const restar = () => {
        setCuenta(Math.max(cuenta - 1, 1))
    }

    const ClickAddToCart = () => {
      onAdd(cuenta)
    }

  return (
    <>
    <div style={countStyle}>
      <button onClick={()=>restar()}>-</button>
      <p style={{padding: 13}}>{cuenta}</p>    
      <button onClick={()=>sumar()}>+</button>     
    </div>
    <button style={buttonStyle} onClick={ClickAddToCart}>Añadir al Carrito</button> 
    </>
  )
}
