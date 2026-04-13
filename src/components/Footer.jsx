import React from 'react'
import { FaFacebook, FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'

function Footer() {
  return (
   <>
    <div style={{height:"400px", backgroundColor:"#5e412b", backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center flex-column text-light'>
      <h1>Contact Us</h1>
      <h3> <MdAttachEmail /> resumebuilder@gmail.com</h3>
      <h3> <FaPhoneAlt /> 9087654321</h3>
      <h2>Connect with Us</h2>
      <div className='my-5 fs-4'>
         <FaWhatsapp />
         <FaFacebook className='mx-2' />
         <FaInstagram />
      </div>
      <h4>Designed & built with love using React</h4>
    </div>
  </>   
  )
}

export default Footer
