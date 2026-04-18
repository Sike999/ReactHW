import { IoIosClose,IoMdTime } from "react-icons/io";
import '../styles/RedBanner.css'
export default function RedBanner() {
    return(
        <div className="redBanner">
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop:"12px"}}>
                <IoMdTime size={22} className="timeIcon"/>
                <IoIosClose size={26} className="close"/> 
                <p className="pBanner" style={{fontSize:"16px"}}>Special Deal!</p>
            </div>
            <p className="pBanner">Register now to unlock exclusive offers and discounts</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <p className="pBanner">Offer expires in:  0:59:59</p> 
            </div>
        </div>
    )
}