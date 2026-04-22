import '../styles/Cart.css'
import OrderSummary from '../components/OrderSummary'
export default function Cart({cart,setCart,category,setCategory}){
    console.log(cart.length)
    return(
        <>
        <h3 style={{textAlign:"left"}}>Shopping Cart</h3>
            {Object.keys(cart).length === 0 ? 
                <div className='emptyCart'>
                  <p style={{marginBottom:"15px", color:"gray"}}>Your cart is empty</p>
                  <button className="addButton" onClick={() => {setCategory('tv')}}>Continue Shopping</button>  
                </div> 
             :  <div className='itemsAndSummary'>
                    <div style={{display:"flex",flexDirection:"column", width:"70%"}}>
                        {Object.values(cart).forEach(item => (
                            <></>
                        ))}
                    </div>
                    <OrderSummary/>
                </div>
            }
        </>
    )
}