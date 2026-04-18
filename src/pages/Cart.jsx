export default function Cart({cart,setCart,category,setCategory}){
    console.log(cart.length)
    return(
        <>
        <h3 style={{textAlign:"left"}}>Shopping Cart</h3>
            {Object.keys(cart).length === 0 ? 
                <div style={{height:"500px", display:"flex", flexDirection:"column", margin:"100px auto"}}>
                  <p style={{marginBottom:"15px", color:"gray"}}>Your cart is empty</p>
                  <button className="addButton" onClick={() => {setCategory('tv')}}>Continue Shopping</button>  
                </div> 
             :  <>

                </>
            }
        </>
    )
}