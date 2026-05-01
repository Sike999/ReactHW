import Filter from '../components/Filter.jsx'
import RedBanner from '../components/RedBanner.jsx'
import Card from '../components/Card.jsx'
import WeatherWidget from '../components/WeatherWidget.jsx'
import '../styles/Market.css'
import { useCallback, useLayoutEffect, useState, useMemo, useRef } from 'react'

export default function Market({setProducts,products,originalProducts,cart,setCart,category,setCategory}){
    const sortRef = useRef(null)
    const [sortValue, setSortValue] = useState('Low to High')
    const [showBanner, setShowBanner] = useState(true)
    const sortedProducts = useMemo(() => {
        const copy = [...products]
        if (sortValue === 'Low to High') {
            copy.sort((a, b) => a.price - b.price)
        } else {
            copy.sort((a, b) => b.price - a.price)
        }
        return copy
    }, [products, sortValue])

    return(
        <div className='mainContainer'>
            <div className='leftContent'>
                <Filter category={category} setProducts={setProducts} products={products} originalProducts={originalProducts}/>
                <WeatherWidget />
                {showBanner && <RedBanner showBanner={showBanner} setShowBanner={setShowBanner}/>}
            </div>
            <div className='rightContent'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p>{products.length} products</p>
                    <div>
                        <span style={{fontSize:"12pt"}}>Sort by: </span>
                        <select style={{width:"180px"}} value={sortValue} onChange={(e) => {setSortValue(e.target.value)}}>
                            <option value='Low to High'>Low to High</option>
                            <option value='High to Low'>High to Low</option>
                        </select>
                    </div>
                </div>
                <div className='cardSection'>
                    {sortedProducts.map((element, index) => (
                        <Card key={element.id} cart={cart} id = {element.id} setCart={setCart} images={element.images} make={element.make} model={element.model} price={element.price} isSpecialOffer={element.isSpecialOffer}/>
                    ))}
                </div>
            </div>
        </div>
    )
}