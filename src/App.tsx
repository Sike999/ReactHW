import { useState, useRef } from 'react'
import productsData from './data/products.js' 
import Container from './pages/Container.js'



function App() {
  const [products, setProducts] = useState(productsData)
  const originalProducts = useRef(structuredClone(productsData))
  return (
      <Container originalProducts={originalProducts.current} products={products} setProducts={setProducts}/>
  )
}

export default App
