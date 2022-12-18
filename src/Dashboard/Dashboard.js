import React, { useEffect } from "react";
import AdminFooter from "./AdminFooter";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { auth, logout } from "../config/Fire";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Navbar,
  Container,
  Dropdown,
  Nav
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading, navigate]);


 
 

  return (
    <div>
      {/* top navigation bar */}
      <nav className="adminNavBar container-fluid d-flex justify-content-between align-items-center">
        <div>
          <a class="navbar-brand container" href>
            <img
              src="img/AV.ico"
              alt="assets-icon"
              width="100"
              height="80"
              className="rounded-3 mb-3"
            />{" "}
          </a>
        </div>
        <div>
          <Dropdown className="me-3 ">
            <Dropdown.Toggle className="user-icon" id="dropdown-basic">
              <FaUserAlt />
            </Dropdown.Toggle>{" "}
            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-hover">
                {user?.email}
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-hover" onClick={logout}>
                logout <FaSignOutAlt />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
      {/* down navigation bar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="admin-down-navbar p-3"
        variant="dark"
      >
        <Container>
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
      <br />

      {/* Content Row1 */}
      <section className="container">
        <div class="container row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Name
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      Robert Derrick Smith
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Nationality
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      American
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Purpose
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          For Safe Keeping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Date Of Deposit
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      18th July 2017
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <br />
      {/* Content Row2 */}
      <section className="container">
        <div class="container row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Item
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      One Metallic Trunk Box
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Serial
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      045466754
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Sec. Code
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          AVSC/112/GC-VA4523/GC-AVA553/11
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Charge Per Month
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $2,100.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* Content Row3 */}
      <section className="container">
        <div class="container row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Next Of Kin
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      Georgina Smith
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Content
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      24 Gold Bars
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Initial Payment
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                         $50,400.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Our Reference
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                    AVSC/COL-S098/002
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <AdminFooter />
    </div>
  );
}

export default Dashboard;
