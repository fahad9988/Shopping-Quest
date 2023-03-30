import { Box,Heading } from '@chakra-ui/react'
import React from 'react'
import style from "../../Style/Footer.module.css"
const Footer = () => {
  return (
    <div className={style.main}>
    <div className={style.footer}>
      <Box>
        <h1 className={style.head}>Get to Know us</h1>
        <p>About Us</p>
        <p>
Careers

</p>
        <p>Press Releases</p>
        <p>Amazon Science</p>
        
      </Box>
      <Box>
      <h1 className={style.head1}>Connect with us</h1>
        <p>Facebook

</p>
        <p>Twitter</p>
       <p>Instagram</p>
      </Box>
      <Box>
      <h1 className={style.head2}>Make Money with us</h1>
        <p>Sell on Amazon






</p>
        <p>Sell under Amazon Accelerator</p>
        <p>Protect and Build Your Brand</p>
        <p>Amazon Global Selling</p>
        <p>Become an Affiliate</p> 
        <p>Fulfilment by Amazon</p> 
        <p>Advertise Your Products</p> 
        <p>Amazon Pay on Merchants</p>  
        </Box>
      <Box>
      <h1 className={style.head3}>Let us Help You</h1>
        <p>COVID-19 and Amazon




</p>
        <p>Your Account</p>
        <p>Returns Centre</p>
        <p>100% Purchase Protection</p>
        <p>Amazon App Download</p>
        <p>Help</p>
      </Box>
      
    </div>
    <img className={style.last} src="https://i.imgur.com/t37OALA.png" alt="zz" />
    </div>
  )
}

export default Footer
