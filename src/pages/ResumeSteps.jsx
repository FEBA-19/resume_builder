import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ResumeSteps() {
  return (
    <div className='my-5'>
      <h1 className='text-center'>Create a Job-Winning Resume in Minutes</h1>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-4 rounded p-5 shadow mb-3 text-center'>
            <IoDocumentTextOutline className='fs-1 text-primary mb-3' />
            <h4>Add your Information</h4>
            <p>Add pre-written examples to each section</p>
            <h5>Step 1</h5>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-1'></div>
          <div className='col-md-4 rounded p-5 shadow mb-3 text-center'>
            <FaFileDownload className='fs-1 text-danger mb-3' />
            <h4>Download your Resume</h4>
            <p>Download and start applying</p>
            <h5>Step 2</h5>
          </div>
          <div className='col-md-1'></div>
          <div className='text-center mt-5'>
            <Link to={'/form'} className='btn text-light' style={{backgroundColor: "#9f7c64"}}>Let's Start</Link>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ResumeSteps
