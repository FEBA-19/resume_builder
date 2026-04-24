import React from 'react'
import { FaBackward, FaFileDownload, FaHistory } from "react-icons/fa";
import { Link, useParams} from "react-router-dom";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { useState } from 'react';
import { useEffect } from 'react';
import { downloadResumeAPI, getResumeAPI } from '../services/allResumeApiService';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const [resumeData, setResumeData] = useState({})
  console.log(resumeData);
  const previewRef = useRef()

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async()=>{
    if(id){
      const result = await getResumeAPI(id)
      setResumeData(result.data)
    }
  }
  
  const downloadResume =async()=>{
    const previewTag = previewRef.current
    // const canvas = await html2canvas(previewTag)
    const canvas = await html2canvas(previewTag,{
      // scale: 1 reduce quality (default is 2)
    })
    const imgData = canvas.toDataURL("image/jpeg",0.7) // compress
    generatePDF(imgData)
  }
  const generatePDF = async(resumeImg)=>{
     // get time of download
    const today = new Date()
    const timeStamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`

    // create PDF object
    const pdf = new jsPDF()
    const imgWidth = pdf.internal.pageSize.getWidth()
    const imgHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    const downloadDetails = {
      timeStamp, resumeId:id,resumeImg
    }

    // api call
    const result = await downloadResumeAPI(downloadDetails)
    console.log(result);  
    if(result.status == 201){
      alert("Resume Downloaded Successfully....")
    }
  }
    
  

  return (
    <div className='container'>
      <div className='row my-2'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Set Icons */}
          {/* Downloads */}
          <div className='d-flex justify-content-center align-items-center'>
            <button onClick={downloadResume} className='btn text-primary fs-2 me-2'>
              <FaFileDownload/>
            </button>
          {/* Edit */}
          <Edit resumeData={resumeData} setResumeData={setResumeData}/>
          {/* History */}
          <Link to={'/downloads'} className='btn text-danger fs-2 me-2'>
          {""}
          <FaHistory/>
          </Link>
          {/* Back */}
          <Link to={'/form'} className='btn text-success fs-2 me-2'>
          {""}
          <FaBackward/>
          </Link>
        </div>
        <div ref={previewRef} className='mt-5'><Preview resumeData={resumeData}/></div>
       </div> 
        <div className="col-lg-2"></div>  
      </div>
    </div>
  )
}

export default ViewResume
