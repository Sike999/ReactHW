// @ts-expect-error - CSS import
import '../styles/Header.css'
import { useState,useEffect } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import Portal from './Portal';
import LoginForm from './LoginForm';
export default function Header({sum,cart,category,setCategory} : {sum: number, cart: CartType, category: string, setCategory: React.Dispatch<React.SetStateAction<string>>}) {
    const [isPortalOpen,setIsPortalOpen] = useState<boolean>(false)
    return(
        <header>
            <div className='half'>
                <a onClick={() => {setCategory('tv')}}><span style={{fontSize:"24px"}}>TechStore</span></a>
                <a onClick={() => {setCategory('tv')}}><span style={{fontSize:"16px", color: category === 'tv' ? "black" : "gray"}}>TV</span></a>
                <a onClick={() => {setCategory('phone')}}><span style={{fontSize:"16px",color: category === 'phone' ? "black" : "gray"}}>Phone</span></a>
                <a onClick={() => {setCategory('laptop')}}><span style={{fontSize:"16px",color: category === 'laptop' ? "black" : "gray"}}>Laptop</span></a>
            </div>
            <div className='half'>
                {(Object.keys(cart).length !== 0) && (
                    <div className='quantityIndicator'>{sum}</div>
                )}
                <a onClick={() => {setCategory('cart')}}><AiOutlineShoppingCart style={{width:"26px",height:"26px"}}/></a>
                <a><AiOutlineUser style={{width:"26px",height:"26px"}} onClick={() => {setIsPortalOpen(true)}}/></a>
            </div>
            {isPortalOpen && (
                <Portal onClose={() => {setIsPortalOpen(false)}}>
                    <LoginForm onClose={() => {setIsPortalOpen(false)}} />
                </Portal>
            )}
        </header>
    )
}