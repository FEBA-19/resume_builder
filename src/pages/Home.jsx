import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* landing */}
      <div style={{minHeight: "100vh", backgroundImage:'url("/landing.png")', backgroundSize:'cover', backgroundPosition:"center",backgroundAttachment:"fixed"}} className='d-flex flex-column py-5'>
         <div className='container-fluid d-flex flex-grow-1 justify-content-center align-items-center py-5'>
             
             <div className='rounded shadow p-5 text-center text-light' style={{backgroundColor:"rgba(108,102,90,0.5)"}}>
              <h3>Designed to get hired. <br/> Your skills, your story, your next job - all in one.
              </h3>
              <Link to={'/steps'}className="btn text-light mt-3" style={{backgroundColor:"#a38461"}}>Make Your Resume</Link>
             </div>
         </div>
      </div>
      {/* tools */}
        <div className='container-fluid mt-5 h-75 w-75'>
            <h1 className='text-center pt-2'>Tools</h1>
            <div className='d-flex justify-content-between container mt-5 mb-2'>
                <div>
                    <dl>
                       <dt>Resume</dt>
                       <dd>Create unlimited new resumes and easily edit them afterwards.</dd>
                       <dt>Cover Letters</dt>
                       <dd>Easily write professional cover letters.</dd>
                       <dt>Jobs</dt>
                       <dd>Automatically receive new and relevant job postings.</dd>
                       <dt>Applications</dt>
                       <dd>Effortlessly manage and track your job applications in an organized manner.</dd>
                    </dl>
                </div>
                <div className='pb-5'><img height={'300px'} width={'300px'} className='rounded' src="./resume.png" alt="No Image" /></div>
            </div>
        </div>
        {/* image */}
        <div style={{height:"80vh", backgroundImage: 'url("https://t3.ftcdn.net/jpg/18/07/45/24/360_F_1807452405_1ZLtF3Bi8wcCbA6p5MjqbetEjFh21Pac.jpg")', backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment: 'fixed'}}></div>
        {/* testimony */}
        <div className="conatiner mb-5">
           <h1 className="text-center my-5">Testimony</h1>
           <div className="row align-items-center">
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <h5 className="pb-4">Trusted by professionals worldwide.</h5>
                <p>At LiveCareer , we don't just help you create resumes - we help you land the job. Whether youire a seasoned professional or just starting out, our tools are designed to get results.</p>
                <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster</p>
                <p>Join thousands of job-seekers who've fast-tracked their careers with a resume that truly stands out.</p>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="row">
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>
                    <div className="col-lg-3">
                       <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                    </div>

                </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default Home
