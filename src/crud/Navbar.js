import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function navbar() {
  return (
    //  <Navbar expand="lg" className="bg-body-tertiary" container="fluid">
    <Navbar expand="lg" bg="primary" variant="dark" className="fluid"> 
        <div className='container'>
      
        <Navbar.Brand href="#" className="bold-text">OPerpus <FaBook /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active ">
                    <Link to="/" className="nav-link text-light">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/peminjaman" className="nav-link text-light">Peminjaman</Link>
                </li>
            </ul>
        </div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light"><FaSearch /></Button>
          </Form>
     
      </div>
    </Navbar>
  );
}

export default navbar;