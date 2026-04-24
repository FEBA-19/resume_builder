import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RiFileEditFill } from 'react-icons/ri';
import TextField from '@mui/material/TextField';
import { HiXMark } from "react-icons/hi2";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import jobTypes from "../assets/jobRole.json"
import { useRef } from 'react';
import { editResumeAPI } from '../services/allResumeApiService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeData, setResumeData}) {
  const skillRef = useRef()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  
  console.log(resumeData);
  
  const removeSkill = (skill)=>{
     setResumeData({...resumeData,skills:resumeData?.skills?.filter(item=>item!=skill)})
  }

  const addSkill = (skill)=>{
    if(skill){
      if(resumeData?.skills?.map(item=>item.toLowerCase())?.includes(skill.toLowerCase())){
        alert("Given Skill Already Exist!!")
      }else{
        setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
      }
      skillRef.current.value = ""
    }else{
      alert("Input valid Skill")
    }
  }

  const handleEditResume = async()=>{
    const{fullName,location,email,phone,linkedin,github,degree,university,passOut,skills,summary} = resumeData
            if(fullName && location && email && phone && linkedin && github && degree && university && passOut && skills.length>0 && summary){
                // API call
                const response = await editResumeAPI(resumeData?.id,resumeData)
                console.log(response);
                if(response.status==200){
                    alert("Resume Updated successfully!!")
                    handleClose()
                }
                
            }else{
                alert("Please fill the form completely!!")
            }
  }
  
  return (
    <div>
      <Button onClick={handleOpen} className='btn text-warning fs-2 me-2 mt-3'><RiFileEditFill/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Basic details */}
            <div>
                <h3>Personal Details</h3>
                 <div className='p-3 row'>
                        <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Job</InputLabel>
                            <Select onChange={e=>setResumeData({...resumeData,job:e.target.value})}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Job"
                                value={resumeData?.job}
                            >
                            {
                                jobTypes.jobRoles.map(role=>(
                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                ))
                            }
                            </Select>
                        </FormControl>
                  </div>
            </div>
            {/* contact */}
            <div>
                <h3>Contact Details</h3>
                <div className='p-3 row'>
                        <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="E-mail" variant="standard" />
                        <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-phone" label="Contact Number" variant="standard" />
                        <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                        <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-github" label="Github Link" variant="standard" />
                </div>
            </div>
            {/* Education */}
            <div>
                <h3>Educational Details</h3>
                <div className='p-3 row'>
                        <TextField value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField value={resumeData.university} onChange={e=>setResumeData({...resumeData,university:e.target.value})} id="standard-basic-college" label="University/College Name" variant="standard" />
                        <TextField value={resumeData.passOut} onChange={e=>setResumeData({...resumeData,passOut:e.target.value})} id="standard-basic-year" label="Year of Graduation" variant="standard" />
                </div>
            </div>
            {/* skills */}
            <div>
                <h3>Skills</h3>
                <div className='p-3 d-flex justify-content-between'>
                    <input ref={skillRef} type="text" placeholder='Add Skill' className='form-control' />
                    <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>Add</Button>
                </div>
                <h5>Added Skills : </h5>
                {/* Display all skills */}
                <div className='p-3 d-flex justify-content-between flex-wrap'>
                    {
                      resumeData?.skills?.map(skill=>(
                        <Button onClick={()=>removeSkill(skill)} key={skill} variant='contained' className='my-1'>{skill} <HiXMark className='ms-1'/></Button>
                      )) 
                    }  
                </div>
            </div>
            {/* Summary */}
            <div>
                <h3>Summary</h3>
                <div className='p-3 row'>
                    <TextField value={resumeData?.summary} onChange={(e)=>setResumeData({...resumeData,summary:e.target.value})} id="standard-basic-summary" label="Summary" multiline variant="standard" />
                </div>
            </div>
            {/* Update */}
            <button onClick={()=>handleEditResume()} className='btn btn-primary'>Update</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit
