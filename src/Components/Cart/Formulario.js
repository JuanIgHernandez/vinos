import React, { useContext, useState } from 'react'
import { database } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { CartContext} from "../CartContext/CartContext";



const Formulario = () => {

    const pageStyle = {
      backgroundColor:"lightgrey",
      height:518
    }
    const labelStyle = {
      fontSize:20,
      paddingRight:90,
      textTransform: 'uppercase',
    }
    const formStyle = {
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }
    const ConfirmarStyle = {
        marginLeft: 625,
        marginTop: 60,
        padding:20,
        backgroundColor: 'blue',
        color:'white'
    }


    const [confirmar, setConfirmar] = useState(false)
    const { products } = useContext(CartContext)


    const finalizarCompra = () => {
        const datoscompradorCollection = collection(database, 'datoscomprador');
        addDoc(datoscompradorCollection, {
          nombre: nombre,
          apellido: apellido,
          email: email,
          items: products,
          date: serverTimestamp(),
        })
        setConfirmar(true)
       }
    


    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
  return (
    <div style={pageStyle}>
    <h1>GRACIAS POR TU COMPRA, PARA TERMINAR NECESITAMOS TU SIGUIENTES DATOS</h1>
    <form style={formStyle}>
        <label style={labelStyle} htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        <label style={labelStyle} htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
        <label style={labelStyle} htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </form>
    {confirmar ? <h1>MUCHISIMAS GRACIAS POR SU COMPRA</h1> :
    <button style={ConfirmarStyle} onClick={finalizarCompra}>CONFIRMAR</button>}
    </div>
  )
}

export default Formulario