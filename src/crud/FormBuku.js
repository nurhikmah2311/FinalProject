import React from 'react';
import { Row, Col, Form, Button, } from 'react-bootstrap'
import { BiBookAdd } from "react-icons/bi";

const Formulir = ({nama, author, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return ( 
        
        <div className="mt-3">
            <Row>
                <Col sm={10}>
                    <Form onSubmit={handleSubmit} className='shadow p-3 mb-5 bg-white rounded'>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Nama Buku</Form.Label>
                            <Form.Control
                             type="text" 
                             name="nama"
                             value={nama}
                             onChange={(event) => handleChange(event)}
                             />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                             type="text" 
                             name="author"
                             value={author}
                             onChange={(event) => handleChange(event)}
                             />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="deskripsi">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows="3" 
                            name="deskripsi"
                            value={deskripsi}
                            onChange={(event) => handleChange(event)}
                        
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="harga">
                            <Form.Label>Harga Buku</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="harga"
                            value={harga}
                            onChange={(event) => handleChange(event)}
                            
                             />
                        </Form.Group>
                        <Button variant="primary" type="submit"><BiBookAdd /></Button>
                    </Form>
                </Col>
            </Row>
        </div>
     );
}
 
export default Formulir;

