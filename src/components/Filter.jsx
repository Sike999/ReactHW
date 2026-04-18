import '../styles/Filter.css'
export default function Filter({ products }) {
    console.log(products.filter((product) => (product.category === 'tv')))
    return(
        <div className="Filter">
            <p style={{fontSize:"14pt",marginTop:"14px"}}>Filters</p>
            <div style={{marginTop:"14px"}}>
                <p>Brand</p>
                <select>
                    <option disabled selected hidden></option>
                    {products.map((element) => (
                        <option key={element.id} value={element.brand} >{element.brand}</option>
                    ))}
                </select>
            </div>
            <div style={{marginTop:"14px"}}>
                <p>Price Range</p>
                <input type="number" style={{marginRight:"8px"}} className="priceInput"/>
                <input type="number" className="priceInput"/>
            </div>
            <button className="addButton">Apply Filters</button>
        </div>
    )
}