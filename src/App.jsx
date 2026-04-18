import { useState } from 'react'
import products from './data/products.js'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  return (
    <>
      <Home products={products.filter((products) => (products.category === 'tv'))}>
      </Home>
    </>
  )
}

export default App
