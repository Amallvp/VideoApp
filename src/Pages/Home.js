import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import Category from '../Components/Category'
import Views from '../Components/Views'
import { Link } from 'react-router-dom'



function Home() {

  const [addUpdate, setAddUpdate]= useState({})
  
  return (
    <div>
      <Row>
        <Col><h3 id='head' className='mt-3 add'>All Video Cards</h3>  </Col>
        
        
          <Col>
          <Link to={"/watch-history"} style={{ textDecoration:'none'}} > 
          <h6  id='head' className='text-end mt-3 m-2 add' >Watch History <i class="fa-regular fa-clock fa-spin"></i></h6>
          </Link>
          </Col>
        
        </Row>
      
      

      <Container>
        <Row>
          <Col lg={1}>
            <Add  updateData={setAddUpdate}></Add>
          </Col>
          <Col lg={7}>
         <Views data={addUpdate} ></Views>
            </Col>
          <Col lg={4}>
            <Category></Category>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home