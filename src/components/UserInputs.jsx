import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTypes from "../assets/jobRole.json"
import skillJSON from "../assets/skills.json"
import summaryJSON from "../assets/summaries.json"
import { addresumeAPI } from '../services/allResumeApiService';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Skills And Summary', 'Review & Submit'];

function UserInputs({resumeData, setResumeData}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const navigate = useNavigate()

    console.log(resumeData);
    
    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };
    const generateAI = ()=>{
        setResumeData({...resumeData,
            skills:skillJSON[resumeData.job],
            summary:summaryJSON[resumeData.job]})
            handleNext()
    }

    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
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
            )

                break;
            case 1: return (
                 <div>
                    <h3>Contact Details</h3>
                    <div className='p-3 row'>
                        <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="E-mail" variant="standard" />
                        <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-phone" label="Contact Number" variant="standard" />
                        <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                        <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-github" label="Github Link" variant="standard" />
                    </div>
                </div>
            )
                break;
            case 2: return (
                 <div>
                    <h3>Educational Details</h3>
                    <div className='p-3 row'>
                        <TextField value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField value={resumeData.university} onChange={e=>setResumeData({...resumeData,university:e.target.value})} id="standard-basic-college" label="University/College Name" variant="standard" />
                        <TextField value={resumeData.passOut} onChange={e=>setResumeData({...resumeData,passOut:e.target.value})} id="standard-basic-year" label="Year of Graduation" variant="standard" />
                    </div>
                </div>
            )    
                break;
            case 3: return (
                 <div>
                    <div className='p-3 row'>
                        <h6>Our AI will generate Skills and Summary according to Job Role. Click the,<b> AI Skills & Summary </b>button to proceed.</h6>
                    </div>
                </div>
            )
            default: null
                break;
        }

    }
    
    const handleAddResume = async ()=>{
        const{fullName,location,email,phone,linkedin,github,degree,university,passOut,skills,summary} = resumeData
        if(fullName && location && email && phone && linkedin && github && degree && university && passOut && skills.length>0 && summary){
            // API call
            const response = await addresumeAPI(resumeData)
            console.log(response);
            if(response.status==201){
                alert("Resume Added successfully!!")
                const resumeID = response.data.id
                navigate(`/resume/${resumeID}/view`)
            }
            
        }else{
            alert("Please fill the form completely!!")
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length-1 ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleAddResume}>Finish</Button> 
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                    {/* render form according to activeStep count */}
                    <Box>
                        {
                            renderStepContent(activeStep)
                        }
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        
                        <Button onClick={activeStep === steps.length - 2 ? generateAI : handleNext}>
                            {activeStep === steps.length - 2 
                            ? "Generate AI Skills & Summary"
                            :"Next"}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInputs
