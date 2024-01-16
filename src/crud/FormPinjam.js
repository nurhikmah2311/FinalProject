import React from 'react';
import { Row, Col, Form, Button, } from 'react-bootstrap'
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Formulir = ({npinjam, nbuku, tglkeluar, tglmasuk, handleChange, handleSubmit}) => {
    return ( 
        <div className="mt-3">
                    <Form onSubmit={handleSubmit} className='shadow p-3 mb-5 bg-white rounded'>
                        <Row>
                            <Col>
                        <Form.Group className="mb-3" controlId="npinjam">
                            <Form.Label>Nama Peminjam</Form.Label>
                            <Form.Control
                             type="text" 
                             name="npinjam"
                             value={npinjam}
                             onChange={(event) => handleChange(event)}
                             />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="nbuku">
                            <Form.Label>Nama Buku</Form.Label>
                            <Form.Control
                             type="text" 
                             name="nbuku"
                             value={nbuku}
                             onChange={(event) => handleChange(event)}
                             />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="keluar">
                            <Form.Label>Tanggal Keluar</Form.Label>
                            <Form.Control 
                            type='date'
                            name="tglkeluar"
                            value={tglkeluar}
                            formatDate="dd/MM/yyyy"
                            onChange={(event) => handleChange(event)}
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="masuk">
                            <Form.Label>Tanggal Masuk</Form.Label>
                            <Form.Control 
                            type='date'
                            name='tglmasuk'
                            value={tglmasuk}
                            formatDate="dd/MM/yyyy"
                            onChange={(event) => handleChange(event)}
                             />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Button variant="primary" type="submit" className='mt-4'>Submit</Button>
                        </Col>
                        </Row>
                    </Form>
        </div>
     );
}
 
export default Formulir;

