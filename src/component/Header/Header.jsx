import React from 'react';
import Logo from '../../assets/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';




function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
        <div className='header-container'>
            {/* <div> */}
            
            <img src={Logo} alt="Logo" className="header-logo" />
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <nav className='header-nav'>
                <ul className='header-ul'>
                    <li >Services</li>
                    <li>Invest</li>
                    <li>Contact Us</li>
                    <Link to ='/Login'>
                    <li>Log In</li>
                    </Link>
                    
                </ul>
                </nav>
            </div>
            
                        
            <Link to ='/Signup'>
            <button className='header-button'>Sign up</button>
            </Link>
            

            
            
             <div
       className={`hamburger ${isOpen ? "active" : ""}`}
     onClick={() => setIsOpen(!isOpen)}
       >
        <span></span>
       <span></span>
        <span></span>
      </div> 
</div>
           
{/* //          </div> */}
        </>
    );  
}
export default Header;