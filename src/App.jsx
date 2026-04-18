import { useState } from 'react'
import products from './data/products.js'
import Container from './pages/Container.jsx'
import './App.css'

function App() {
  return (
    <>
      <Container products={products}>
      </Container>
    </>
  )
}

export default App
