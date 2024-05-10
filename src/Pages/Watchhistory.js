import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getHistory } from '../service/allapis';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Watchhistory() {

    const [history, sethistory] = useState([])

    const watchHis = async () => {
        const result = await getHistory()            // if const {data}=await getHistory() enn kodthal 
        sethistory(result.data)                     //  sethistory(data) enn kodkka so code simple aavum  ith oru destructuring method aan
    }
    console.log(history);

    useEffect(() => {
        watchHis()
    }, [])



    return (
        <div>

            <div>
                <Row>
                    <Col><h4 id='head' className='mt-3 text-center'>Video Watch History</h4></Col>

                    <Col>
                        <Link to={'/home'} style={{ textDecoration:'none'}}>
                            <h4 id='head' className='mt-3 text-center'>Back <i class="fa-solid fa-circle-left"></i> </h4>
                        </Link>
                    </Col>
                </Row>

            </div>

            <div >
                <Table responsive="sm" striped bordered hover className='container mt-2 text-center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>VIDEO TITLE</th>
                            <th>URL</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            history.length > 0 ? history.map((i, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.cardname}</td>
                                    <td>{i.url}</td>
                                    <td>{i.date}</td>
                                </tr>)

                            ) : (<h4>Not Watched Any Videos</h4>)

                        }

                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default Watchhistory