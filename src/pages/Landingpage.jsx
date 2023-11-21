

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


function Landingpage() {

// useNavigate()is a hook

const navigate=useNavigate()


  const handleNavigate=()=>{
  // navigate to home page
  navigate('/home')

}

  return (
    <div>
      
    <Row className='align-item-center'>

    <Col></Col>
    <Col lg={6}>
        <h1>Welcome to Videoooo.com</h1>
        <p style={{textAlign:'justify'}}>where user can use their favourate videos user can upload any youtube videos by copy and paste their url. videooo.com will allow to add and remove their upload videos and also arrange  them in different catagories by drag and drop .its is free try it now!!!!!!  </p>
        <button onClick={handleNavigate} className='btn btn-primary'>click here to know more!!!</button>
    </Col>

    <Col lg={4}>
        <img className='img-fluid' style={{width:"350px", height:"320", marginLeft:"70px"}} src="https://cdn.icon-icons.com/icons2/1221/PNG/512/1492608049-15-youtube-video-player-play-logo-media_83366.png" alt="no image" />
    </Col>
    <Col></Col>
    </Row>

    </div>
  )
}

export default Landingpage
