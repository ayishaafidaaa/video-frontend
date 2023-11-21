

import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-primary " >
        <Container>
          <Navbar.Brand href="#home">

           <Link to={'/'} style={{textDecoration:"none"}}>
             <Upload style={{color:'black'}}/>
            <span className='ms-4' style={{color:'black'}}>Video Upload </span>
           </Link>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
