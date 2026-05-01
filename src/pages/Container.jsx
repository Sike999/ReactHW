import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Market from './Market.jsx'
import Cart from '../pages/Cart.jsx'
import '../styles/Container.css'
import { useEffect, useState, createContext, useContext } from 'react'

const handlers = createContext()

const handleAdding = (id,setCart) => {
            setCart((prev) => (
                {...prev, [id]: (prev[id] || 0) + 1 }
            ))
        }
const handleDeleting = (id,cart,setCart) => {
    const quantity = cart[id]
    if(quantity === 1){
        const newCart = {...cart}
        delete newCart[id]
        setCart(newCart)
    }
    else{
        setCart((prev) => (
            {...prev, [id]: (prev[id] || 0) - 1 }
        ))
    }
}

export default function Container({originalProducts,setProducts,products}) {

    const [category, setCategory] = useState('tv')
    const [cart, setCart] = useState({})
    const [sum, setSum] = useState(0)

    useEffect(() => {
        const filtered = originalProducts.filter(p => p.category === category)
        setProducts(filtered)
    }, [category, originalProducts])

    useEffect(() => {
        setSum(Object.values(cart).reduce((acc, qty) => acc + qty, 0))
    },[cart])

    return (
        <handlers.Provider value={{handleAdding,handleDeleting}}>
            <Header cart={cart} sum={sum} setCart={setCart} category={category} setCategory={setCategory} />
                { category === 'cart' ? <Cart originalProducts={originalProducts} category={category} setCategory={setCategory} cart={cart} setCart={setCart}/> : <Market originalProducts={originalProducts} setProducts={setProducts} products={products} cart={cart} setCart={setCart} category={category} setCategory={setCategory}/> }
            <Footer />
        </handlers.Provider>
    )
}
export function useHandlers() {
    return useContext(handlers);
}