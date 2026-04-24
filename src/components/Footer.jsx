import { FaFacebook, FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'

function Footer() {
  return (
   <>
    <div style={{height:"400px", backgroundColor:"#5e412b", backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center flex-column text-light'>
      <h1 className='font'>Contact Us</h1>
      <h3 className='font'> <MdAttachEmail /> resumebuilder@gmail.com</h3>
      <h3 className='font'> <FaPhoneAlt /> 9087654321</h3>
      <h2 className='font'>Connect with Us</h2>
      <div className='my-5 fs-4'>
         <FaWhatsapp />
         <FaFacebook className='mx-2' />
         <FaInstagram />
      </div>
      <h4 className='font'>Designed & built with 🤍 using React</h4>
    </div>
  </>   
  )
}

export default Footer
