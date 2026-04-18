import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Market from './Market.jsx'
import Cart from '../pages/Cart.jsx'
import '../styles/Container.css'
import { useState } from 'react'
export default function Container({products}) {
    const [category, setCategory] = useState('tv')
    const [cart, setCart] = useState({})
    products = products.filter((products) => (products.category === category))
    return (
        <>
        <Header cart={cart} setCart={setCart} category={category} setCategory={setCategory} />
            { category === 'cart' ? <Cart category={category} setCategory={setCategory} cart={cart} setCart={setCart}/> : <Market products={products} cart={cart} setCart={setCart} category={category} setCategory={setCategory}/> }
        <Footer />
        </>
    )
}