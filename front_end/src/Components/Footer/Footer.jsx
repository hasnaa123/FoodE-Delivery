import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.slogon} className='slogon' alt=''/>
            
        </div>
         
         
         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About-us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>
        
        
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+212-642-567</li>
                <li>contact@master-chef.com</li>
            </ul>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>
      </div>
      <hr />
      <p className="footer-copyright">
      © 2025 Master Chef. All rights reserved
      </p>

    </div>
  )
}

export default Footer
