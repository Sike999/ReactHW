import '../styles/Header.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
export default function Header({cart,setCart,category,setCategory}) {
    return(
        <header>
            <div className='half'>
                <a onClick={() => {setCategory('tv')}}><span style={{fontSize:"24px"}}>TechStore</span></a>
                <a onClick={() => {setCategory('tv')}}><span style={{fontSize:"16px", color: category === 'tv' ? "black" : "gray"}}>TV</span></a>
                <a onClick={() => {setCategory('phone')}}><span style={{fontSize:"16px",color: category === 'phone' ? "black" : "gray"}}>Phone</span></a>
                <a onClick={() => {setCategory('laptop')}}><span style={{fontSize:"16px",color: category === 'laptop' ? "black" : "gray"}}>Laptop</span></a>
            </div>
            <div className='half'>
                {Object.keys(cart).length !== 0 && (
                    <div className='quantityIndicator'>{Object.keys(cart).length}</div>
                )}
                <a onClick={() => {setCategory('cart')}}><AiOutlineShoppingCart style={{width:"26px",height:"26px"}}/></a>
                <a><AiOutlineUser style={{width:"26px",height:"26px"}}/></a>
            </div>
        </header>
    )
}