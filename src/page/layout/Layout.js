import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Dropdown from "../../component/dropdown/Dropdown";
import Navbar from "../../component/nav/Navbar";
import logo from "../../images/logo.PNG";
import "./Layout.style.css";
const Layout = ({ children }) => {
  return (
    <Container>
      <div className="headers">
        <Image src={logo} alt="" />
        <div className="main">
             <Button varient="primary">Create Client</Button>
        <Button varient="primary">Logout</Button>
        </div>
       
      </div>

      <Navbar />
      <h1>Customer</h1>
      <Dropdown />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
