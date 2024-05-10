import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../service/allapis';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uniqid from 'uniqid';
import { format } from 'date-fns';


function Viewcards({ video, deleteData,inCard }) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    // ith handleshowil ann cheyyande bcz viewcard click cheyyumbo watchhistoryil details register aavanam
    // so athinu venda keys call cheyyuaan  

    let id = uniqid()

    let date = format(new Date(), 'MM/dd/yyyy,h:mm:ss a')

    //url & video captn
    const { caption, url } = video

    

    if(id !="" && date !="" && caption !="" && url !=""){

      const body={
        id, cardname:caption,url, date
      }
      await addHistory(body)
    }


  }

  // delete cheyyanulla api call aann ith

  const handleDelete = async (id) => {
    const response = await deleteVideo(id)
    //  console.log(response);
    if (response.status >= 200 && response.status < 300) {

      deleteData(true)

      toast.success("Video Deleted");
    }
  }

// function for drag

const dragStarted=(e,id)=>{
  console.log('source id'+id);

  // store dragged data

  e.dataTransfer.setData("cardId",id)
}



  return (
    <div>
      <Row>
        <Col className='col1 p-2'>

          <Card draggable onDragStart={(e)=>dragStarted(e,video?.id)}
           style={{ width: '16rem'}} >
            <Card.Img variant="top" style={{ height: "180px", width: '100%' }} onClick={handleShow}
              src={video?.thumbnail} />
           {inCard ? " " :  <Card.Body style={{height:'12rem'}}>
              <Card.Text className='card-footer border-primary p-2'>
              <p>  <p className='fs' style={{ color: 'white' }}>{video.caption}</p> <span className='float-end'>
                  {inCard ? " " : (<Trash2 onClick={() => handleDelete(video?.id)} className='btn' size={77} color='white'></Trash2>)}
                  
                  </span></p>
              </Card.Text>

            </Card.Body>}
          </Card>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{video.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body><iframe width="100%" height="400px" src={video?.url + "?autoplay=1"}
              title=" "
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>


    </div>
  )

}

export default Viewcards