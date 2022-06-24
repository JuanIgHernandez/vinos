import React, { useState } from 'react'

export const ItemCount = ({ Stock, Initial = 1 }) => {
    const [Cuenta, setCuenta] = useState(Initial)

    const sumar = () => {
        Cuenta < Stock && setCuenta(Cuenta + 1)
        Cuenta >= Stock && alert('No hay stock =(')
    }
    const restar = () => {
        setCuenta(Math.max(Cuenta - 1, 1))
    }

    const onAdd = () => {
        alert('Gracias por su compra')
    }

  return (
    <div>
    <button onClick={restar}>-</button>
    <p>{Cuenta}</p>    
    <button onClick={sumar}>+</button>
    <button onClick={onAdd}>COMPRAR</button>    
    </div>
  )
}
