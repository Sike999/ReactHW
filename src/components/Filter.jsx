import '../styles/Filter.css'
import { useRef, useState, useCallback } from 'react'
export default function Filter({ category,setProducts,products,originalProducts }) {

    const brandFilter = useRef(null)
    const minNumber = useRef(null)
    const maxNumber = useRef(null)

    const filter = () => { // надо ли стабильной делать эту ссылку? я вот подумал что это не очень то и нужно конкретно здесь
        const brand = brandFilter.current?.value
        const minPrice = minNumber.current?.value
        const maxPrice = maxNumber.current?.value
        setProducts(prev => {

            if(brand === 'All' && minPrice === '' && maxPrice === ''){
                return originalProducts.filter(p => p.category === category)
            }
            let result = originalProducts.filter(p => p.category === category)
            if (brand && brand !== 'All') {
                result = result.filter(p => p.brand === brand)
            }
            if (minPrice && minPrice !== '') {
                result = result.filter(p => p.price >= Number(minPrice))
            }
            if (maxPrice && maxPrice !== '') {
                result = result.filter(p => p.price <= Number(maxPrice))
            }
            return result
            })
    }

    const unique = [... new Set(
        originalProducts.filter((product) => (product.category === category)).map(product => product.brand)
    )]
    return(
        <div className="Filter">
            <p style={{fontSize:"14pt",marginTop:"14px"}}>Filters</p>
            <div style={{marginTop:"14px"}}>
                <p>Brand</p>
                <select ref={brandFilter} defaultValue={'All'}>
                    <option value='All'>All</option>
                    {unique.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>
            <div style={{marginTop:"14px"}}>
                <p>Price Range</p>
                <input type="number" placeholder={0} style={{marginRight:"8px"}} className="priceInput" ref={minNumber}/>
                <input type="number" placeholder={5000} className="priceInput" ref={maxNumber}/>
            </div>
            <button className="addButton" onClick={() => {filter()}}>Apply Filters</button>
        </div>
    )
}