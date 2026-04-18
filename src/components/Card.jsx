import '../styles/Card.css'
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect } from 'react';
export default function Card({ products, id, images, make, model, price, isSpecialOffer, cart, setCart }) {
    const [isCardHovered,setIsCardHovered] = useState(false);
    const [isFavourite,setIsFavourite] =  useState(false);
    const [isAdded,setIsAdded] =  useState(false);
    const [inCartNumber, setInCartNumber] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(cart)
    const handleAdding = () => {
        setCart((prev) => (
            {...prev, [id]: (prev[id] || 0) + 1 }
        ))
        console.log(cart)
    }
    const handleDeleting = () => {
        setCart((prev) => (
            {...prev, [id]: (prev[id] || 0) - 1 }
        ))
        console.log(cart)
    }
    useEffect(() =>{
            if(inCartNumber === 0) {
                setIsAdded(false)
                setInCartNumber(1)
            }

            if(currentImageIndex === images.length) setCurrentImageIndex(0)
            if(currentImageIndex === -1) setCurrentImageIndex(images.length-1)
    }, [inCartNumber, setInCartNumber,currentImageIndex,setCurrentImageIndex])
    return(
        <div className='Card' onMouseEnter={() => {setIsCardHovered(true)}} onMouseLeave={() => {setIsCardHovered(false)}}>
            {isCardHovered && (
                <>
                {isFavourite ? (<span className='favouriteActive' onClick={() => {isFavourite ? setIsFavourite(false) : setIsFavourite(true)}}><AiFillHeart style={{color:"#FFFFFF", cursor: "pointer"}}/></span>) 
                : (<span className='favouriteInactive' onClick={() => {isFavourite ? setIsFavourite(false) : setIsFavourite(true)}}><AiOutlineHeart style={{cursor: "pointer"}}/></span>)}
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
                <p>${price}</p>
                {
                    isAdded ? 
                    <div>
                        <button className='addMore' style={{backgroundColor:"#ECEEF2",color:"black"}} onClick={() => { setInCartNumber((prev) => {return prev - 1}); handleDeleting() }}> - </button>
                        <span style={{fontSize:"15px", margin:"0 17px 0 17px"}}>{inCartNumber} in cart</span>
                        <button className='addMore' style={{backgroundColor:"#000000",}} onClick={() => { setInCartNumber((prev) => { return prev + 1}); handleAdding() }}> + </button>
                    </div> 
                    : 
                    <button className="addButton" onClick={() => {isAdded ? setIsAdded(false) : setIsAdded(true); handleAdding()}}>Add to cart</button>
                }
            </div>
        </div>
    )
}