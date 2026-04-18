import '../styles/Footer.css'
export default function Footer() {
    return(
            <footer>
                <div className='fHalf'>
                    <span>About</span>
                    <span>Support</span>
                    <span>Legal</span>
                    <span>Newsletter</span>
                </div>
                <div className='fHalf' style={{paddingTop:"30px", marginTop:"36px",borderTop:"1px solid #E2E2E2",justifyContent:"center"}}>
                    <p style={{fontSize:"15px"}}>© 2026 TechStore. All rights reserved.</p>
                </div>
            </footer>
        )
}