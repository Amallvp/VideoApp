import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Video } from 'react-feather';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Landingpage() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='mt-4 mb-4' >
                        <h1 className='mt-4 head' >Welcome to <span id='head' style={{ color: '#92ecf7' }}><Video size={30} color='#92ecf7'></Video>  Video Studio</span></h1>
                        <p className='mt-2 mb-3 pb-2 pag'><span id='head' className='fs-4'>Video Studio</span> is a tool or service that allows you to upload and share videos on the internet.
                            There are many video uploading platforms available, each with its own unique features. For instance, Streamable offers easy video hosting and allows users to upload and share their videos instantly1.
                            It supports streaming in 4K UHD (60fps) and provides one-click resizing to various formats1.</p>
                        <p className='mt-3 mb-2 pb-2 pag' > With this application, users have the capability to upload videos.
                            They can categorize their videos into various predefined categories.
                            This feature allows for better organization and easier retrieval of the uploaded videos in the future.
                            It also enhances the user experience by allowing users to browse through different categories based on their interests.</p>

                        {/* link is used to redirect the the landingpage to home page by clicking the button */}
                        <Link to={'/home'}>

                            <div className='bt'>
                                <b><Button variant="outline-info"><b>Click Here To Know More</b></Button>{' '}</b>
                            </div>
                        </Link>
                    </div>
                </Col>

                <Col>
                    <div className='img container text-center mt-2'>
                        <img id='img' src="https://i.postimg.cc/L8wWSN8p/p.png" alt="" />
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Landingpage