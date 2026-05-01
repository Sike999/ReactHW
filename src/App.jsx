import { useState,useMemo, useRef } from 'react'
import products1 from './data/products.js' 
import Container from './pages/Container.jsx'
import './App.css'



function App() {
  const [products, setProducts] = useState(products1)
  const originalProducts = useRef(structuredClone(products1))
  return (
    <>
      <Container originalProducts={originalProducts.current} products={products} setProducts={setProducts}>
      </Container>
    </>
  )
}

export default App
