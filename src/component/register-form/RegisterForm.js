import React from "react";
import { Form, Button } from "react-bootstrap";
import "./registerForm.style.css"
const RegisterForm = () => {
  return (
    <div className="backgroundRegister">
      <div className="registerstyle">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer ID</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Booking</Form.Label>
          <Form.Control type="number"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Total</Form.Label>
          <Form.Control type="number" placeholder="Cost" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Booking</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
