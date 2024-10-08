import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <div className='footer__div'>
       <div>
           <div className='footer__divs'>
              <div className='footer__logo'>
                 EcoMart
              </div>
               <ul className='ul'>
                <li>Company</li>
                <li>Phones/tablet</li>
                <li>gaming gadget</li>
                <li>Accessories</li>
                <li>Cameras</li>
               </ul>
               <ul className='ul'>
                <li>Contact</li>
                <li>FAQs</li>
                <li>contact us</li>
               </ul>
               <ul className='ul'>
                <li>terms and policy</li>
                <li>privacy and policy</li>
                <li>terms and condition</li>
               </ul>
               <div className='footers__icons'>
                   <div className='footer__icon'>
                       <InstagramIcon/>
                   </div>
                   <div className='footer__icon'>
                       <TwitterIcon/>
                   </div>
                   <div className='footer__icon'>
                       <FacebookOutlinedIcon/>
                   </div>
                   <div className='footer__icon'>
                       <WhatsAppIcon/>
                   </div>
               </div>

           </div>
       </div>
    </div>
  )
}

export default Footer
