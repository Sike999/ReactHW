// @ts-expect-error - CSS import
import "../styles/inCartItems.css"
import { FaRegTrashCan } from "react-icons/fa6";
import { useHandlers } from '../pages/Container';
export default function InCartItems({id, quantity, setCart, cart, product} : {id:number,quantity:number,setCart:React.Dispatch<React.SetStateAction<CartType>>, cart:CartType, product:ProductType}){
    const {handleAdding,handleDeleting} = useHandlers()
    const cleanItemHandler = (cart : CartType) => {
        const newCart = {... cart}
        delete newCart[id]
        setCart(newCart)
    }
    return(
        <div className="inCartItems">
            <div style={{display:"flex"}}>
                <img src={product.images[0]} className="inCartImg"/>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <p style={{color:"gray",fontSize:'10pt'}}>{product.make}</p>
                    <p style={{fontWeight:"bold",fontSize:"11pt"}}>{product.model}</p>
                    <div style={{display:"flex", marginLeft:"20px"}}>
                        <button className="addButtonAlt" style={{width:"30px", height:"30px",fontSize:'20px'}} onClick={() => {handleDeleting(id,cart,setCart)}}> - </button>
                            <p style={{margin:"0 30px 0 30px"}}>{quantity}</p>
                        <button className="addButton" style={{width:"30px", height:"30px",fontSize:'20px'}} onClick={() => {handleAdding(id,setCart)}}> + </button>
                    </div>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:"center"}}>
                <button style={{ background: "none", border: "none", padding: 0, margin:"0 0 0 20px", cursor: "pointer", display: "inline-flex", lineHeight: 0, width: "fit-content", height: "fit-content",}}
                onClick={() => {cleanItemHandler(cart)}}>
                    <FaRegTrashCan style={{color:"red",fontSize:"17px"}}/>
                </button>
                <p style={{fontSize:"12pt"}}>${product.price}</p>
            </div>
        </div>
    )
}