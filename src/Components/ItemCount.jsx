import React, { useState } from 'react'


const countStyle = {
    backgroundColor: 'aqua',
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '50%',
}
const buttonStyle = {
    marginLeft: '50%',
    backgroundColor: 'blue',
    color: 'white',
    height: 50,
    width: 100,
}

export const ItemCount = ({ Stock, Initial = 1, onAdd }) => {
    const [Cuenta, setCuenta] = useState(Initial)

    const sumar = () => {
        Cuenta < Stock && setCuenta(Cuenta + 1)
        Cuenta >= Stock && alert('No hay stock =(')
    }
    const restar = () => {
        setCuenta(Math.max(Cuenta - 1, 1))
    }

    const ClickAddToCart = () => {
      onAdd(Cuenta)
    }

  return (
    <>
    <div style={countStyle}>
      <button onClick={restar}>-</button>
      <p style={{padding: 13}}>{Cuenta}</p>    
      <button onClick={sumar}>+</button>     
    </div>
    <button style={buttonStyle} onClick={ClickAddToCart}>Añadir al Carrito</button> 
    </>
  )
}
