import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Displaybookinglist.styles.css"
const Displaybookinglist = () => {
  return (
    <div>
      <Card>
        <Card.Header>
          <Container>
            <Row>
              <Col>Customer</Col>
              <Col>Customer ID</Col>
              <Col>Bookings</Col>
              <Col>Total</Col>
              <Col>Last Booking</Col>
              <Col>Location</Col>
              <Col>Email</Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>1</Col>
              <Col>2</Col>
              <Col>3</Col>
              <Col>3</Col>
              <Col>3</Col>
              <Col>3</Col>
              <Col>3</Col>
            </Row>
          </Container>
         
        </Card.Body>
      </Card>

      <Button variant="primary">Next</Button>
    </div>
  );
};

export default Displaybookinglist;
