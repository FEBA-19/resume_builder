import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Button } from "@mui/material";
function Preview({resumeData}) {
  return (
    <div className='p-5 m-5 w-100 border border-shadow'>
      <h2 className='font'>{resumeData?.fullName}</h2>
      <p className='fs-6 font'>Phone: {resumeData?.phone}</p>
      <p className='fs-6 font'>Email: {resumeData?.email}</p>
      <p className='fs-6 font'>LinkedIn: <a className='font' href={resumeData?.linkedin}>{resumeData?.linkedin}</a></p>
      <p className='fs-6 font'>GitHub: <a className='font' href={resumeData?.github}>{resumeData?.github}</a> </p>
      <p className='fs-6 font'>Location: {resumeData?.location}</p>
      <Divider className='bg-dark my-3'/>
      <h4 className='mt-3 font'>Professional Summary</h4>
      <p className='font'>{resumeData?.summary}</p>
      <Divider className='bg-dark my-3'/>
      <h4 className='mt-3 font'>Technical Skills</h4>
      {/* Duplicate user skill */}
      {
        resumeData?.skills?.map((item,index)=>(
          <Button className='m-2 font' key={index} variant="outlined">{item}</Button>
        ))
      }
      <Divider className='bg-dark my-3'/>
      <h4 className='font'>Education</h4>
      <p className='fs-6 font'>Bachelor's Degree in <b className='font'>{resumeData?.degree}</b></p>
      <p className='fs-6 font'>University/College Name <b className='font'>{resumeData?.university}</b></p>
      <p className='fs-6 font'>Year of Graduation <b className='font'>{resumeData?.passOut}</b></p>
      <Divider className='bg-dark my-3'/>
    </div>
  )
}

export default Preview
