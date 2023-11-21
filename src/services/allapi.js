import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";

// add video

   export const addVideo=async(body)=>{

  return  await  commonRequest("POST",`${BASE_URL}/videos`,body)

}

// get video

 export const getVideo=async()=>{
  return await  commonRequest("GET",`${BASE_URL}/videos`,"")
  }


// delete
  export  const deleteVideo=async(id)=>{
    return await  commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
    }
    
// add catagories
   export const addCategory =async(body)=>{
    return await  commonRequest("POST",`${BASE_URL}/categories`,body)
    }


    // get all categories

     export const getallCategories=async()=>{


      return await   commonRequest("GET",`${BASE_URL}/categories`,"")


     }
 
    // delete category

   export const deleteCategory=async(id)=>{

      return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
      
    }

    // get history

    export const gethistory=async()=>{
          
         return await   commonRequest("GET",`${BASE_URL}/watch_history`,"")
       
        }


        // add history

        export const Addhistory =async(body)=>{
          return await  commonRequest("POST",`${BASE_URL}/watch_history`,body)
          }

          //  get single card details

     export const getVideos=async(id)=>{
      return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
    }


   //  to update card details in catagory section

     
   export const updateCategory=async(id,body)=>{
      return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
    }