import React, { useEffect, useState } from 'react'
import Viewcards from './Viewcards'
import { Col, Row } from 'react-bootstrap'
import { allVideo } from '../service/allapis'


function Views({ data }) {




  const [videos, setVideos] = useState([])



  const [deleteStatus, setdeleteStatus] = useState(false)

  const getVideos = async () => {

    const result = await allVideo()
    setVideos(result.data);
  }

  // console.log(videos);



  useEffect(() => {
    getVideos()}, [data, deleteStatus])

  
  return (
    <div >
      <Row className='border border-info p-2 rounded mb-5'>

        {videos?.map(video => (

          <Col sm={12} md={6} >
            <Viewcards deleteData={setdeleteStatus} video={video}></Viewcards>
          </Col>

        ))}

      </Row>

    </div>
  )
}

export default Views