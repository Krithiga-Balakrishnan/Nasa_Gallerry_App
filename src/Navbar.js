  import { Link } from 'react-router-dom';
  import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useUserAuth } from "./auth/UserAuthContext";
import UserProfilePage  from './js/UserProfilePage';  // Import UserProfilePage component



const OffcanvasExample = ({ currentPage, setCurrentPage }) => {
  const { logOut, user } = useUserAuth();
  const [showUserProfile, setShowUserProfile] = useState(false);


  const handleLogout = async () => {
    try {
      await logOut();
      setCurrentPage('login'); // After logout, redirect to login page
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/"onClick={() => setCurrentPage('about')}>
            <img
    src={process.env.PUBLIC_URL + './Navbar.svg'}
    width="auto"
    height="45"
    className="d-inline-block align-top"
    alt="GalaxyGaze Logo"
    
  />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
            >

              <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              {user && (
                    <div className="d-flex align-items-center justify-content-end mb-3">
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as="button" className="p-0" onClick={toggleUserProfile}>
                          <i className="fa-solid fa-user" style={{ marginRight: '5px', fontSize: '1.2rem' }}></i>
                          {user.userName || user.userEmail}
                        </Nav.Link>
                      </Nav>
                    </div>
                  )}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  {/* Display user profile page if user is logged in and showUserProfile is true */}
                {showUserProfile && user && (
                  <UserProfilePage user={user} />
                )}
                {!showUserProfile && (
/* Display navigation options */
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as="button" onClick={() => setCurrentPage('about')}>About</Nav.Link>
                  <Nav.Link as="button" onClick={() => setCurrentPage('home')}>Home</Nav.Link>
                  <NavDropdown title="APOD" id="basic-nav-dropdown" className="justify-content-center" style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <NavDropdown.Item as="button" onClick={() => setCurrentPage('login')}>Login</NavDropdown.Item> */}
                    <NavDropdown.Item as="button" onClick={() => setCurrentPage('image')}>Image</NavDropdown.Item>
                    <NavDropdown.Item  as="button" onClick={() => setCurrentPage('image-of-the-day')}>Image of the Day</NavDropdown.Item>                  
                    {/* <NavDropdown.Divider /> */}
                  
                  </NavDropdown>
                  <Nav.Link as="button" onClick={() => setCurrentPage('mars-rover')}>Mars Rover</Nav.Link>
                 
                </Nav>
                
              )}
                {/* Display logout button if user is logged in and not on the login page */}
                {user && currentPage !== 'login' && (
                  <Form className="d-flex align-items-center">
                    <Button variant="outline-danger" id="logout" onClick={handleLogout} className="flex-grow-1">
                      <i className="fa-solid fa-right-from-bracket" style={{ marginRight: '5px' }}></i> Logout
                    </Button>
                  </Form>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
    </>
  );
};

export default OffcanvasExample;

