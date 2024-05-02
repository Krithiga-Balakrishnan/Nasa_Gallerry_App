import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useUserAuth } from "./auth/UserAuthContext";


  const OffcanvasExample = ({ currentPage, setCurrentPage }) => {
    const { logOut, user } = useUserAuth();

    const handleLogout = async () => {
      try {
          await logOut();
          setCurrentPage('login'); // After logout, redirect to login page
      } catch (error) {
          console.log(error.message);
      }
  };


    return (
      <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme="dark">
          <Container fluid>
          <Navbar.Brand as={Link} to="/">GalaxyGaze</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
            >
              
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {user && (user.userName ? user.userName : (user.userEmail ? user.userEmail : ''))}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as="button" onClick={() => setCurrentPage('home')}>Home</Nav.Link>
              <Nav.Link as="button" onClick={() => setCurrentPage('image')}>Image</Nav.Link>
              <Nav.Link as="button" onClick={() => setCurrentPage('image-of-the-day')}>Image of the Day</Nav.Link>
              <Nav.Link as="button" onClick={() => setCurrentPage('mars-rover')}>Mars Rover</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as="button" onClick={() => setCurrentPage('login')}>Login</NavDropdown.Item>
                <NavDropdown.Item as="button" onClick={() => setCurrentPage('about')}>About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
                  <Button variant="outline-success" id="logout" onClick={handleLogout}>Logout</Button>
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

