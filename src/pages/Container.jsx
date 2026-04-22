import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Market from './Market.jsx'
import Cart from '../pages/Cart.jsx'
import '../styles/Container.css'
import { useEffect, useState } from 'react'
export default function Container({products}) {
    const [category, setCategory] = useState('tv')
    const [cart, setCart] = useState({})
    const [sum, setSum] = useState(0)
    useEffect(() => {
        setSum(Object.values(cart).reduce((acc, qty) => acc + qty, 0))
        console.log(cart)
    },[cart])
    products = products.filter((products) => (products.category === category))
    return (
        <>
        <Header cart={cart} sum={sum} setCart={setCart} category={category} setCategory={setCategory} />
            { category === 'cart' ? <Cart category={category} setCategory={setCategory} cart={cart} setCart={setCart}/> : <Market products={products} cart={cart} setCart={setCart} category={category} setCategory={setCategory}/> }
        <Footer />
        </>
    )
}