import Filter from '../components/Filter.jsx'
import RedBanner from '../components/RedBanner.jsx'
import Card from '../components/Card.jsx'
import '../styles/Market.css'
export default function Market({products,cart,setCart,category,setCategory}){
    return(
        <div className='mainContainer'>
            <div className='leftContent'>
                <Filter products={products}/>
                <RedBanner />
            </div>
            <div className='rightContent'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p>{products.length} products</p>
                    <div>
                        <span style={{fontSize:"12pt"}}>Sort by: </span>
                        <select style={{width:"180px"}}>
                            <option disabled selected hidden></option>
                            <option >High to Low</option>
                            <option >Low to High</option>
                        </select>
                    </div>
                </div>
                <div className='cardSection'>
                    {products.map((element, index) => (
                        <Card key={element.id} cart={cart} id = {element.id} products={products} setCart={setCart} images={element.images} make={element.make} model={element.model} price={element.price} isSpecialOffer={element.isSpecialOffer}/>
                    ))}
                </div>
            </div>
        </div>
    )
}