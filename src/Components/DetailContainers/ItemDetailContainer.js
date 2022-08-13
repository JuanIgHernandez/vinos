import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import { database } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"
import LoopIcon from '@mui/icons-material/Loop';

export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const productsCollection = collection(database, 'productos');
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [productId]);

    return (
        <>
         {loaded ? <LoopIcon color="black" fontSize="large" /> : <ItemDetail product={product} />}
        </>
    )
}


export default ItemDetailsContainer