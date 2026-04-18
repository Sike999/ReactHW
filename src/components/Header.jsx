import '../styles/Header.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
export default function Header() {
    return(
        <header>
            <div className='half'>
                <a><span style={{fontSize:"24px"}}>TechStore</span></a>
                <a><span style={{fontSize:"16px"}}>TV</span></a>
                <a><span style={{fontSize:"16px",color:"gray"}}>Phone</span></a>
                <a><span style={{fontSize:"16px",color:"gray"}}>Laptop</span></a>
            </div>
            <div className='half'>
                <a><AiOutlineShoppingCart style={{width:"26px",height:"26px"}}/></a>
                <a><AiOutlineUser style={{width:"26px",height:"26px"}}/></a>
            </div>
        </header>
    )
}