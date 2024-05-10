import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, allCategory, deleteCategory, getVideo, updateCategory } from '../service/allapis';
import uniqid from 'uniqid';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import { Trash2 } from 'react-feather';
import Viewcards from './Viewcards';

function Category() {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // categoryilek input add cheyyan vediyulla api call

  const [uploadCategory, setuploadCategory] = useState({
    id: "",
    name: "",
    allvideos: []
  })

  const [category, setCategory] = useState([])

  const CategoryInput = async (e) => {

    const { value, name } = e.target
    setuploadCategory({ ...uploadCategory, [name]: value })
  }
  // console.log(category);

  //---------------------------------------------------------- 

  // iputil id generate cheyyan vendi

  const handleCategory = async () => {

    let id = uniqid()
    setuploadCategory({ ...uploadCategory, ["id"]: id })

    const {name}=uploadCategory

    if (name === "") {

      toast.warn("Please input Category Name")
 
     }
     else{
    // api call

    const result = await addCategory(uploadCategory)
    if (result.status >= 200 && result.status < 300) {
      setShow(false)
      toast.success('New Category Added')

    }}

  }


  // to get all category names in view card

  const getallCategory = async () => {

    const result = await allCategory()
    setCategory(result.data);
  }


  useEffect(() => {
    getallCategory()
  }, [category], {})


  //  category delete cheyyan

  const deleteCat = async (id) => {
    const response = await deleteCategory(id)
    if (response.status >= 200 && response.status < 300) {

      getallCategory()      // category remove aaya bhaki pending category details load aayo veranann ith kodkkne

    }
  }

  const draggedOver = (e) => {
    e.preventDefault()
    // console.log('gghggghhg');
  }

  const dropped = async (e, id) => {
    console.log(id);

    //access video id transfered from start drag
    let sourceCardId = e.dataTransfer.getData("cardId")
    console.log("source card id" + sourceCardId);

    const { data } = await getVideo(sourceCardId)
    console.log(data);


    //update category
    //find selected category from all category using caat id

    const selectedCategory = category.find(i => i.id === id)
    console.log(selectedCategory);

    //add videoto category 

    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);

    //update category in database

    await updateCategory(id, selectedCategory)

    // to access updated category from database
    getallCategory()

  }
  return (
    <div className="d-grid gap-2 mb-5">
      <>
        <Button variant="primary" size="lg" onClick={handleShow}>
          Add Category
        </Button>


        <div className='text-center'>

          {category?.map(category => (

            <div droppable onDragOver={(e) => draggedOver(e)}

              onDrop={(e) => dropped(e, category?.id)}
            >
              <Row className='mb-2 me-2 container border p-1 ms-1 bdr'>
                <Col className='mt-1'>
                  <h5>{category.name}</h5>
                </Col>
                <Col>
                  <Button onClick={() => deleteCat(category?.id)} variant="primary" size="sm" className='mt-1 w-50'>
                    <Trash2 className='trash'></Trash2>
                  </Button>
                </Col>
                <Row>
                    {category?.allvideos.map(i => ( 
                      <Col > 
                        <Viewcards inCard={true}  video={i}></Viewcards>
                      </Col>
                    ))}
                  </Row>
              </Row>
            </div>

          ))}


        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Category" className="mb-3">
              <Form.Control name='name' onChange={(e) => CategoryInput(e)} as="textarea" placeholder="" />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>


            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={() => handleCategory(category?.id)} variant="primary">
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

    </div>
  )
}

export default Category