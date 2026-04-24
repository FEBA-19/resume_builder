import { useState } from 'react'
import Preview from '../components/Preview'
import UserInputs from '../components/UserInputs'

function UserForm() {
  const [resumeData, setResumeData] = useState({
        fullName: "",
        location: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        degree: "",
        university: "",
        passOut: "",
        skills: [],
        summary: ""
  })
  
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <UserInputs resumeData={resumeData} setResumeData={setResumeData}/>
        </div>
        <div className='col-lg-6'>
           {resumeData.fullName && <Preview resumeData={resumeData}/>}
        </div>
      </div>
    </div>
  )
}

export default UserForm
