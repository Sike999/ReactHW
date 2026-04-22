export default function OrderSummary() {
    return(
        <div className="OrderSummary">
            <p>Order Summary</p>
            <div><p>Subtotal</p> <p></p></div>
            <div><p>Tax (8%)</p> <p></p></div>
            <div><p>Shipping</p> <p>Calculated at checkout</p></div>
        </div>
    )
}