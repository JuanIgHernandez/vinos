import React, { createContext, useState, useEffect } from 'react'


export const CartContext = createContext();
const { Provider } = CartContext;


const CartCustomProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);
    const [total, setTotal] = useState(0)
    
    const GetQtyProducts = () => {
        let qty = 0;
        products.forEach(product => qty += product.qty);
        setQtyProducts(qty);
    }

    useEffect(() => {
      GetQtyProducts();
    }, [products])
    
  
    
    const addProduct = (product) => {
        if(isInCart(product.id)){
            const found = products.find(p => p.id === product.id)
            const index = products.indexOf(found)
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux)
        } else{
            setProducts([...products, product])
        }
        console.log(products)
        
    }
    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    };

    const isInCart = (id) => {
        return products.some(products => products.id === id)
    };

    const clear = () => {
        setProducts([]);
        setQtyProducts(0)
    }
    const CalcularTotal = () =>{
        setTotal(products.reduce((acc,products)=>acc+=products.price))
    }

  return (
    <Provider value={{products, addProduct, deleteProduct,clear, qtyProducts, CalcularTotal, total}}>
        {children}
    </Provider>
  )
}

export default CartCustomProvider