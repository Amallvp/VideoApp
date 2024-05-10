import axios from "axios";

//axiosinte import cheythu

//api structure create cheyyanam so arrow fuction aan use cheyyne 

export const commonRequest=async (method,url,body)=>{

    let requestConfig={

        method,
        url,
        data:body

    }

   return await axios(requestConfig).then((result)=>{
        return result
    }).catch(err=>{
        return err
    })
}