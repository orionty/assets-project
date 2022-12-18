import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from 'axios';

function NavBar() {
  const[mailName,setMailName] = useState(" ");
  const[mailEmail,setMailEmail] = useState("");
  const[address,setAddress] = useState("");

  const sendMail = () =>{
    Axios.post("https://assets-vaults.herokuapp.com/mail-service",{
        mailName: mailName,
        mailEmail: mailEmail,
        address:address
    }).then(() => {alert("sent successfully") })
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div>
      <>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton className="bg-dark text-light">
            <Modal.Title>
              {" "}
              <h3 class="container">About Us</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark">
            <section>
              <div class="container shadow-lg p-3 mb-5 bg-dark text-light rounded">
                <p>
                  At Assets Vaults, we take great satisfaction in the first-rate
                  service and affordable prices we provide to our loyal clients.
                  We offer a quick and safe option to exchange unwanted gold for
                  cash. We take pride in being the most reliable gold buying
                  experts in Ghana. We now provide a seamless service from the
                  comfort of your home that fits in with your hectic schedule in
                  addition to our wildly popular Mail-In service. No matter
                  where you live in Ghana, we provide this service for free
                  nationwide!
                </p>
              </div>
            </section>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button
              variant="secondary"
              onClick={handleClose2}
              className="bg-dark"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* Modal */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="bg-dark text-light">
            <Modal.Title>
              {" "}
              <h1 class="container">Mail-in Service</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark">
            <section>
              <div class="container shadow-lg p-3 mb-5 bg-dark rounded">
                <form
                >
                  <div class="form-group m-3">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="mailName"
                      placeholder="Enter your name"
                      required
                      onChange = {(e) => {
                        setMailName(e.target.value)
                    }}
                    />
                  </div>
                  <div class="form-group m-3">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="mailEmail"
                      placeholder="example@gmail.com"
                      required
                      onChange = {(e) => {
                        setMailEmail(e.target.value)
                    }}
                    />
                  </div>
                  <div class="form-group m-3">
                    <label for="address">Address</label>
                    <input
                      type="address"
                      class="form-control"
                      name="address"
                      placeholder="Enter your address"
                      required
                      onChange = {(e) => {
                        setAddress(e.target.value)
                    }}
                    />
                  </div>

                  <button class="btn btn-warning mt-5" onClick={sendMail}>
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button
              variant="secondary"
              onClick={handleClose}
              className="bg-dark"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* down navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark "
        bg="dark"
        className="navBar p-3 d-flex justify-content-between align-items-center"
      >
        <Container fluid>
          <Link to="/" className="text-decoration-none navitem">
            <Navbar.Brand
              className="navBrand fw-bold"
              style={{ color: "goldenrod" }}
            >
              <span class="AV">AV</span>ASSETS VAULTS
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link className="navLinkHover">
                <Link
                  to="/"
                  className="text-decoration-none navitem"
                  id="#home"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover">
                <Link to="/services" className="text-decoration-none navitem">
                  Our Services
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover  navitem" onClick={handleShow}>
                Mail Service
              </Nav.Link>

              <Nav.Link className="navLinkHover">
                <Link to="/contact-us" className="text-decoration-none navitem">
                  Contact Us
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover" onClick={handleShow2}>
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="responsive-navbar-nav "
            className="justify-content-end"
          >
            <div className="d-flex">
              <Nav.Link className="navLinkHover"></Nav.Link>
              <a href="/sign-in">
                <button type="button" className="btn btn-outline-warning">
                  Sign In
                </button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
