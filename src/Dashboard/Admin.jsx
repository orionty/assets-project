import React, {useEffect} from 'react'
import {auth,logout} from '../config/Fire'
import { useAuthState } from "react-firebase-hooks/auth";
import {  useNavigate } from "react-router-dom";
import {  FaUserAlt,FaSignOutAlt } from 'react-icons/fa';
import {Navbar,Container,Dropdown,Nav} from "react-bootstrap";
import AdminBackground from './AdminBackground';
import AdminFooter from './AdminFooter';

function Admin() {


  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    
  }, [user, loading,navigate]);


  
  
  return (
    <div >
      {/* top navigation bar */}
    <nav className='adminNavBar container-fluid d-flex justify-content-between align-items-center'>
      <div>
    <a class="navbar-brand container" href>
    <img src="img/AV.ico" alt="assets-icon" width="90" height="80"  className='rounded-3 mb-3' /> </a>
  </div>
   <div>
   <Dropdown className='me-3 '>
  <Dropdown.Toggle className='user-icon' id="dropdown-basic">
  <FaUserAlt />
   </Dropdown.Toggle>   <Dropdown.Menu>
   <Dropdown.Item className='dropdown-hover'>{user?.email}</Dropdown.Item>
     <Dropdown.Item className='dropdown-hover' onClick={logout}>logout <FaSignOutAlt /></Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
   </div>
     
    </nav>
{/* down navigation bar */}
<Navbar collapseOnSelect expand="lg" className='admin-down-navbar p-3' variant="dark">
  <Container >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/admin">Home</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>

      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
<br />
 <AdminBackground />
 <AdminFooter />
 
     </div>
  )
}

export default Admin
