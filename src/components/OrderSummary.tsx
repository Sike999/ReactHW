import '../styles/OrderSummary.css'
import { useMemo } from 'react';
export default function OrderSummary({originalProducts,cart,category,setCategory,products}) {
    const subTotal = useMemo(() => {
        let subTotal = 0;
        for(const elem in cart){
            const product = originalProducts.find((product) => (product.id === Number(elem)))
            if(product.id === Number(elem)){
                subTotal += product.price * cart[elem]
            }
        }
        return subTotal;
    },[cart])
    const total = subTotal * 1.08;
    return(
        <div className="OrderSummary">
            <p style={{fontWeight:"bold",fontSize:"13pt",alignSelf:"flex-start",marginLeft:"10px"}}>Order Summary</p>
            <div className='spaceBetween'> <p className='gray'>Subtotal</p> <p>{subTotal.toFixed(2)}</p></div>
            <div className='spaceBetween'> <p className='gray'>Tax (8%)</p> <p>{(subTotal * 0.08).toFixed(2)}</p></div>
            <div className='spaceBetween'> <p className='gray'>Shipping</p> <p className='gray'>Calculated at checkout</p></div>
            <div className='spaceBetween' style={{borderTop:"1px solid #E2E2E2"}}> <p>Total</p> <p>{total.toFixed(2)}</p></div>
            <button className="addButton" style={{width:"280px"}}>Proceed to Checkout</button>
            <button className="addButtonAlt" style={{width:"280px"}} onClick={() => {setCategory('tv')}}>Continue Shopping</button>
        </div>
    )
}