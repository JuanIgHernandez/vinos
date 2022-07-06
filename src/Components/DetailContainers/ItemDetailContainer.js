import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js';


export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/1`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err=>console.log(err))
    }, []);

    return (
        <>
         <ItemDetail product={product} />
        </>
    )
}


export default ItemDetailsContainer