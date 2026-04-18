import '../styles/Filter.css'
export default function Filter({ products }) {
    
    const unique = [... new Set(
        products.map(product => product.brand)
    )]
    console.log(unique)
    return(
        <div className="Filter">
            <p style={{fontSize:"14pt",marginTop:"14px"}}>Filters</p>
            <div style={{marginTop:"14px"}}>
                <p>Brand</p>
                <select>
                    <option disabled selected hidden></option>
                    {unique.map((brand, index) => (
                        <option key={index} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>
            <div style={{marginTop:"14px"}}>
                <p>Price Range</p>
                <input type="number" placeholder={0} style={{marginRight:"8px"}} className="priceInput"/>
                <input type="number" placeholder={5000} className="priceInput"/>
            </div>
            <button className="addButton">Apply Filters</button>
        </div>
    )
}