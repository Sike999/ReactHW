import '../styles/Cart.css'
import OrderSummary from '../components/OrderSummary'
import InCartItems from '../components/inCartItems'
export default function Cart({originalProducts,cart,setCart,category,setCategory}){
    console.log(cart)
    return(
        <>
        <h3 style={{display: "flex", alignSelf:"left"}}>Shopping Cart</h3>
        <div style={{minHeight:"700px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        
            {Object.keys(cart).length === 0 ? 
                <div className='emptyCart'>
                  <p style={{marginBottom:"15px", color:"gray"}}>Your cart is empty</p>
                  <button className="addButton" onClick={() => {setCategory('tv')}}>Continue Shopping</button>  
                </div> 
             :  <div className='itemsAndSummary'>
                    <div style={{display:"flex",flexDirection:"column", width:"70%"}}>
                        {Object.keys(cart).map(item => (
                            (<InCartItems setCart={setCart} id={Number(item)} quantity={cart[item]} cart={cart} product={originalProducts.find(product => (product.id === Number(item)))}/>)
                        ))}
                    </div>
                    <OrderSummary originalProducts={originalProducts} cart={cart} setCategory={setCategory}/>
                </div>
            }
        </div>
        </>
    )
}