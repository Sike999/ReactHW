// @ts-expect-error - CSS import
import '../styles/Card.css'
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useLayoutEffect } from 'react';
import { useHandlers } from '../pages/Container';
export default function Card({ id, images, make, model, price, isSpecialOffer, cart, setCart } : CardDataType & { cart:CartType, setCart: React.Dispatch<React.SetStateAction<CartType>>}) {
    const [isCardHovered,setIsCardHovered] = useState<boolean>(false);
    const [isFavourite,setIsFavourite] =  useState<boolean>(false);
    const [isAdded,setIsAdded] =  useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    
    const { handleAdding,handleDeleting } = useHandlers()

    useEffect(() =>{
            if(cart[id] === undefined) {
                setIsAdded(false)
            }
    }, [cart])

    useLayoutEffect (() => {
        if(currentImageIndex === images.length) setCurrentImageIndex(0)
        if(currentImageIndex === -1) setCurrentImageIndex(images.length-1)
    },[currentImageIndex])

    return(
        <div className='Card' onMouseEnter={() => {setIsCardHovered(true)}} onMouseLeave={() => {setIsCardHovered(false)}}>
            {isCardHovered && (
                <>
                <span className={isFavourite ? 'favouriteActive' : 'favouriteInactive'} onClick={() => {setIsFavourite(prev => !prev)}}>{isFavourite ? <AiFillHeart style={{color:"#FFFFFF", cursor: "pointer"}}/> : <AiOutlineHeart style={{cursor: "pointer"}}/>}</span>
                {images.length > 1 && (
                    <>
                        <IoIosArrowBack className='arrow' style={{left:"4px", cursor: "pointer"}} onClick={() => {setCurrentImageIndex((prev) => prev - 1)}}/>
                        <IoIosArrowForward className='arrow' style={{left:"170px", cursor: "pointer"}} onClick={() => {setCurrentImageIndex((prev) => prev + 1)}}/>
                    </>
                )}
                </>
            )}
            {isSpecialOffer && (
                <div className='specialOffer'>Special Offer</div>
            )}
            
            <img src={images[currentImageIndex]} alt="img" />
            <div>
                <p style={{fontSize:"12px",color:"gray", marginTop:"8px"}}>{make}</p>
                <p style={{fontWeight:"550",marginBottom:"10px"}}>{model}</p>
                <p>${price.toLocaleString('en-US')}</p>
                {
                    isAdded ? 
                    <div>
                        <button className='addMore addButtonAlt' onClick={() => handleDeleting(id,cart,setCart) }> - </button>
                        <span style={{fontSize:"15px", margin:"0 17px 0 17px"}}>{cart[id]} in cart</span>
                        <button className='addMore addButton' onClick={() => handleAdding(id,setCart)}> + </button>
                    </div> 
                    : 
                    <button className="addButton" onClick={() => {isAdded ? setIsAdded(false) : setIsAdded(true); handleAdding(id,setCart)}}>Add to cart</button>
                }
            </div>
        </div>
    )
}