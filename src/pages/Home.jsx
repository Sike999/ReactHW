import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Filter from '../components/Filter.jsx'
import RedBanner from '../components/RedBanner.jsx'
import '../styles/Home.css'
export default function Home({products}) {
    return (
        <>
        <Header />
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
                        <Card key={element.id} images={element.images} make={element.make} model={element.model} price={element.price} isSpecialOffer={element.isSpecialOffer}/>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}