import React, { useEffect, useState } from 'react'
import { gethistory } from '../services/allapi'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'



function Watchhistory() {

   const[history,setHistory]=useState([])

   const getwatchHistory=async()=>{
     const {data}=await gethistory()
    //  console.log(data);
    setHistory(data)
   }
   console.log(history);

   useEffect(()=>{

    getwatchHistory()

   },[] )

   


  return (
    <>
      
    <div className='d-flex justify-content-center align-item-center'>

       <h1 className='me-5'>Watch History</h1>
  
       <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'green',fontWeight:'bolder'}}>
       <span> <ArrowLeft/> </span>   Back</Link>
  
    </div>

     <table className='table-shadow border rounded m-3'>
       <thead>
        <tr>
          <th> NO</th>
          <th>Name</th>
          <th>Url</th>
          <th>Date</th>
        </tr>
       </thead>

     <tbody>
      
      
      {

      history?.map((item,index)=>(
        
        <tr>

        <td>{index+1}</td>
        <td>{item.cardname}</td>
        <td>{item.url}</td>
        <td>{item.date}</td>

        </tr>
      ))

      }
        
    
     </tbody>


     </table>


    </>
  )
}

export default Watchhistory