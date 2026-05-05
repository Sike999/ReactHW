import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Market from './Market.jsx'
import Cart from '../pages/Cart.jsx'
// @ts-expect-error - CSS import
import '../styles/Container.css'
import { useEffect, useState, createContext, useContext } from 'react'
const handlers = createContext<{
    handleAdding: (id: string | number, setCart: React.Dispatch<React.SetStateAction<CartType>>) => void;
    handleDeleting: (id: string | number, cart: CartType, setCart: React.Dispatch<React.SetStateAction<CartType>>) => void;} | null>(null);

const handleAdding = (id : string | number,setCart: React.Dispatch<React.SetStateAction<CartType>>) => {
        setCart((prev) => (
            {...prev, [id]: (prev[id] || 0) + 1 }
        ))
        }
const handleDeleting = (id : string | number,cart: CartType,setCart: React.Dispatch<React.SetStateAction<CartType>>) => {
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

export default function Container({originalProducts,setProducts,products} : {originalProducts: ProductsArrayType,setProducts: React.Dispatch<React.SetStateAction<ProductsArrayType>>,products: ProductsArrayType}) {

    const [category, setCategory] = useState<string>('tv')
    const [cart, setCart] = useState<CartType>({})
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
                { category === 'cart' ? <Cart originalProducts={originalProducts} category={category} setCategory={setCategory} cart={cart} setCart={setCart}/> 
                : <Market originalProducts={originalProducts} setProducts={setProducts} products={products} cart={cart} setCart={setCart} category={category}/> }
            <Footer />
        </handlers.Provider>
    )
}
export function useHandlers() {
    const context = useContext(handlers);
    if (!context) {
        throw new Error('useHandlers must be used within Container');
    }
    return context;
}