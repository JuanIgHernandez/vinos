import React, { useState } from "react"
import { useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import Productos from "./data/Productos";

const promesa = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(Productos);
    },2000)
})

export const ItemListContainer = ()=>{
    const [ProductsList,setProductsList]= useState(null)

    useEffect(()=>{
        promesa.then(response => setProductsList(response))
    })
    return <div>
        <ItemList Products={ProductsList}  />
    </div>
}

const Greeting = ({saludo}) => (
    <>
    <h2 style={{backgroundColor:'red'}}>{saludo}</h2>
    </>
);


export default Greeting