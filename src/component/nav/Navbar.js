import React from "react";
import { Nav } from "react-bootstrap";
import "./Navbar.styles.css";
const Navbar = () => {
  return (
    <div>
      <Nav className="navcolor">
        <Nav.Item>
          <Nav.Link href="/home">DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">MANAGER CLIENTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">ADD CLIENT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">SORT CLIENT</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
