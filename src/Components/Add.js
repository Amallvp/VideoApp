import React from 'react'
import { FilePlus } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import uniqid from 'uniqid';
import { addVideo } from '../service/allapis';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ updateData }) {



  // {/* api call cheyyan vendi 3 inputum pine unique idyum venam so ath store cheyyan state create cheyyana. 
  //         4 state create cheyyunathinu pakaram easiest wasy aayi oru state abject aayit create cheyyuann */}

  const [uploadData, setuploadData] = useState({
    id: "",
    caption: "",
    thumbnail: "",
    url: ""
  })


  // function to take input data from user ie video caption, url,thumbnail
  const setInput = (e) => {
    let { value, name } = e.target    //  access key & value for inputs 
    setuploadData({ ...uploadData, [name]: value })  // name ile values uploadDatayil poyi load aavan aan ee step , pinne spread cheythal maatre all values kittullue 
    //   {....uploadData,name} ithann spreadin steps 
  }


  const extractUrl = (e) => {
    let videoUrl = e.target.value

    // check the url contain v=string    .        includes use cheyyune stringinte ullu vere string indonn nokkkan aan

    if (videoUrl.includes("v=")) {
      let index = videoUrl.indexOf("v=")
      let extractUrl = videoUrl.substring(index + 2, index + 13)
      // console.log(extractUrl);

      let fullUrl = `https://www.youtube.com/embed/${extractUrl}`

      setuploadData({ ...uploadData, [e.target.name]: fullUrl })
    }


  }

  //function to add

  const handleAdd = async () => {

    let id = uniqid()

    setuploadData({ ...uploadData, "id": id })

    const { caption, thumbnail, url } = uploadData


    if (caption === "") {

     toast.warn("Please input caption")

    }

    else if (thumbnail === "") {

      toast.warn("Please input Thumbnail")
      
   
    }
    else if (url === "") {
      toast.warn("Please input Url")
    
    }
    else {
      const result = await addVideo(uploadData)

      if (result.status >= 200 && result.status < 300) {

        updateData(result.data)
        console.log(uploadData);

        setShow(false)
toast.success(" Video Added ")
     
      }
    }


  }




  // console.log(uploadData);

  //https://www.youtube.com/watch?v=PbRAJGTr5Dc

  // "https://www.youtube.com/embed/PbRAJGTr5Dc" 


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><FilePlus variant="primary" onClick={handleShow} className='btn' style={{ color: '#ff4da6' }} size={93}></FilePlus>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Upload Video</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <FloatingLabel
            controlId="floatingTextarea"
            label="Video Caption" className="mb-3">
            <Form.Control name='caption' onChange={setInput} as="textarea" placeholder="" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea1"
            label="Video Cover image URL" className="mb-3">
            <Form.Control name='thumbnail' onChange={setInput} as="textarea" placeholder="" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="YouTube Video URL" className="mb-3">
            <Form.Control name='url' onChange={extractUrl} as="textarea" placeholder="" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleClose}>
            Close
          </Button>

          <Button onClick={handleAdd} variant="outline-primary">
            Add
          </Button>

        </Modal.Footer>
      </Modal>


    
    </div>
  )
}

export default Add