
import React, { useEffect,useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import {getVideo} from '../services/allapi'





function View({serverRes}) {
  
  const [allvideo,setallvideo]=useState([])

  const[deleteStatus,setdeleteStatus]=useState(false)

  const getallVideo= async()=>{


      let response= await getVideo()

      // console.log(response.data);

      setallvideo(response.data)
  }

  console.log(allvideo);

  useEffect(()=>{

    getallVideo()

  }, [serverRes,deleteStatus]);

  const handleDeleteStatus=(res)=>{
    setdeleteStatus(res)
}


  return (
  
      <div className='border p-3 rounded'>
        <Row>

         {
          allvideo.map(video=>(

            <Col className='ps-3 mb-3' sm={12} md={6}>
            <Videocard card={video} handleDeleteStatus={handleDeleteStatus}/>
            </Col>

          ))
            
          }
        </Row>
      </div>
  
  )
}

export default View
