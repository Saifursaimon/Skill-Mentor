import React, { useContext } from 'react';
import { Nav, Navbar, Container, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import { FaUser } from 'react-icons/fa';
const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  // log out
  const handleLogOut = () => {
    logOut().then(() => { }).catch(err => console.error(err))
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link className='text-black text-decoration-none' to='/'><h2>Skill Mentor</h2></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav className='d-flex align-items-center'>
              <Link className='text-black text-decoration-none mx-4  fw-bold' to="/">
                Home
              </Link>
              <Link className='text-black text-decoration-none mx-4  fw-bold' to="/courses">
                Courses
              </Link>
              <Link className='text-black text-decoration-none mx-4  fw-bold' to="/faq">
                FAQ
              </Link>

              {
                user ?
                  <>
                    <NavDropdown className='mx-4' title={user?.photoURL ? <Image roundedCircle src={user.photoURL} style={{ width: '40px' }} /> : <FaUser></FaUser>} id="basic-nav-dropdown">

                      <NavDropdown.Item className='fw-bold'>{user?.displayName ? user.displayName : 'User'}</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Button variant='primary' onClick={handleLogOut} >Log out</Button></NavDropdown.Item>
                    </NavDropdown>


                  </>
                  :
                  <Link className='text-black text-decoration-none mx-4 ' to="/login"><Button variant='primary'>Log in</Button></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default Header;