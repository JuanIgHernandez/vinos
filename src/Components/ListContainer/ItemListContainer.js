import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { database } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore"
import LoopIcon from '@mui/icons-material/Loop';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

    const q = categoryId
        ? query(collection(database, 'productos'), where('category', '==', categoryId))
        : collection(database, 'productos');
        
    getDocs(q)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(lista);
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))

}, [categoryId]);

    return (
        <>
           {loaded ? <LoopIcon color="black" fontSize="large" /> :<ItemList products={products} />}
        </>
    )
}


export default ItemListContainer