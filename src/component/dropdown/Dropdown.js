import React from "react";
import {
  DropdownButton,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const Dropdown = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Status:Active" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">All</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Active</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Achived</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Countries" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">America</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Australia</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Nepal</NavDropdown.Item>
                <NavDropdown.Item href="#action3">NewZealand</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Customer A-Z" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Aashish</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Asmita</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Ajay</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Binita</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Bijay</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Cimon</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Danny</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Type" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">New Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Previous Booking
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">SIngle</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Couple</NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
  );
};

export default Dropdown;
