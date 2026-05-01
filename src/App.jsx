import { useState,useMemo, useRef } from 'react'
import productsData from './data/products.js' 
import Container from './pages/Container.jsx'
import './App.css'



function App() {
  const [products, setProducts] = useState(productsData)
  const originalProducts = useRef(structuredClone(productsData))
  return (
      <Container originalProducts={originalProducts.current} products={products} setProducts={setProducts}/>
  )
}

export default App
