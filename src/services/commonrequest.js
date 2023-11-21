import axios from "axios";

// function defenition commenrequest
 export const commonRequest= async( method,url,body)=>{
    
// request configuration

let reqConfig={
    url,
    method,
    data:body,
    header:{
        "content -type":"application/json"   
                      
        
        //appplication/json=>string data/normal data 
        //multipart form data => file upload content
    }
}
   
  // api call using axios liberary
  
   return await axios(reqConfig).then((response)=>{
      return response
  }).catch((error)=>{ 
    return error
  })
    
}