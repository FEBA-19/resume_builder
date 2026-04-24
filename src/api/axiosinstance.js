import axios from "axios";



const axiosInstance = axios.create({
    baseURL:"https://ai-rbuilder-backend-ac29.onrender.com",
    timeout: 5000
})

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response Received!!");
        return response
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status == 401){
                console.log("Unauthorized Access...Redirect to Login...");
            }else if(staus == 404){
                console.log("API not Found!!");
            }else if(staus == 500){
                console.log("Server Error!!");
            }else if(error.request){
                console.log("No response from Server!!");
            }else{
                console.log("Error: " +error.message);
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance