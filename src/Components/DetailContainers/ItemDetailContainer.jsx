import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () =>{

    const [Product, setProduct] = useState([])

    

    useEffect (()=>{
        fetch('https://fakestoreapi.com/products/')
        .then((result)=>result.json())
        .then((data)=>{setProduct(data)})
        .catch(err=> console.log(err))

    },[])
    
    return(
        <>
          <ItemDetail key={Product.id} Product={Product}/>
        </>
    )
}