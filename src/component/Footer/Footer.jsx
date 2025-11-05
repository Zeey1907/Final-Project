import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        <div className="foot">
          <h3>Jaysub</h3>
          <p>
            "I came across Jaysub Enterprise through a friend’s page and since I
            have been patronizing, they are very reliable and fast — good
            customer service."
          </p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>Investment</li>
            <li>Data Service</li>
            <li>Electric Bill</li>
            <li>Cable Service</li>
            <li>Crypto Exchange</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>

        <div className="footer-section ">
          <h4>Contact Us</h4>
          <p>info@jaysub.com</p>
          <p>+234902358424</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2019 All Rights Reserved</p>
        <div className="socials">
        </div>
      </div>

      {/* <div className="chat-button">
        <MdEmail className="icon" />
        <span>Send us a message</span>
      </div> */}
    </footer>
  

    </div>
  )
}

export default Footer