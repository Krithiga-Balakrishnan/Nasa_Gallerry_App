import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// const OffcanvasExample = () => {
//   const websiteName = "The Nasa App Gallery";

  // return (
  //   <nav className="navbar">
  //     <div className="logo">
  //       <img src="/nasalogo.png" alt="Logo" style={{ width: '60px', height: 'auto' }} />
  //     </div>
  //     <div className='brand'>
  //       <div className='uniqueName'>
  //         <span style={{ fontFamily: "'Audiowide', cursive", fontSize: '38px', textShadow: '4px 4px 4px #07b5f4' }}>
  //           {websiteName}
  //         </span>
  //       </div>
  //     </div>
  //     <div className='links'>
  //     <Link to="/home">Home</Link>
  //     <Link to="/mars-rover">Mars Rover</Link>
  //       <div className="dropdown">
  //         <button className="dropbtn">Images</button>
  //         <div className="dropdown-content">
  //         <Link to="/image">Picture of the day</Link>
  //         <Link to="/image-of-the-day">Image of any Day</Link>
  //           <a href="/">Image 3</a>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // )


  const OffcanvasExample = ({ currentPage, setCurrentPage }) => {
    return (
      <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as="button" onClick={() => setCurrentPage('home')}>Home</Nav.Link>
              <Nav.Link as="button" onClick={() => setCurrentPage('image')}>Image</Nav.Link>
              <Nav.Link as="button" onClick={() => setCurrentPage('image-of-the-day')}>Image of the Day</Nav.Link>
              <Nav.Link as="button" onClick={() => setCurrentPage('mars-rover')}>Mars Rover</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </>
    );
  };

export default OffcanvasExample;


// export default Navbar;
