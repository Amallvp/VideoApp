import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";

// video add  -  post - url ,body

export const addVideo = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/videos`, body)
}


// get all video - get  -  url 

export const allVideo = async () => {
    return await commonRequest("GET", `${BASE_URL}/videos`, "")
}

// add category  -  post - url  , body

export const addCategory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/category`, body)
}


// get all category - get  -  url 

export const allCategory = async () => {
    return await commonRequest("GET", `${BASE_URL}/category`, "")
}


// delete       -  delete  - url

export const deleteVideo= async (id)=>{
return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})     //deletini empty "" ittkodkaruth only empty objt{}
   }

//delete category - delete url

export const deleteCategory=async (id)=>{
  return await  commonRequest("DELETE",`${BASE_URL}/Category/${id}`,{})
}

//watch history api call

export const getHistory=async ()=>{
  return await commonRequest("GET",`${BASE_URL}/history`,{})
}

//add history from video

export const addHistory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/history`, body)
}

// add video to category - post  - url , body (drag & drop)

// 1. get single video

export const getVideo=async(id)=>{
 return   await commonRequest("GET",`${BASE_URL}/videos/${id}`,{})
}

// 2. api to update category array

export const updateCategory=async(id,body)=>{
    return   await commonRequest("PUT",`${BASE_URL}/category/${id}`,body)
   }
