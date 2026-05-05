import '../styles/LoginForm.css'
import { IoIosClose } from "react-icons/io";
export default function LoginForm({onClose}) {
    // Заглушка
    return(
        <>
        <form className='loginForm'>

            <IoIosClose className="closePortal" size={30} onClick={onClose} />
            
                <h3 style={{marginBottom:"40px"}}>Log in</h3>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                    <div>Login</div>
                    <input type="text" className='addButtonAlt'/>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                    <div>Password</div>
                    <input type="text" className='addButtonAlt'/>
                </div>
                <button className='addButton'>Log in</button>
                <a href="#">Create an account</a>
        </form>
        </>
    )
}