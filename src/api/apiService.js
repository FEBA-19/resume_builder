import axiosInstance from "./axiosinstance"

const apiService = async(htttpMethod,url,reqBody)=>{
    const reqConfig ={
        method: htttpMethod,
        url,
        data:reqBody
    }
    try {
        const response = await axiosInstance(reqConfig)
        return response
    } catch (err) {
        throw err
        
    }
}
export default apiService