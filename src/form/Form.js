import React from "react";
import { Card, Container } from "react-bootstrap";
import './Form.css';
import batPic from './bat.jpg';
import Inputs from "./inputs/Inputs";

function Form() {
  return (
    <Container id="cardContainer">
      <Card style={{ width: "22rem"}}>
        <Card.Img variant="top" src={batPic} />
        <Card.Body id="cardBody">
          <Card.Title>Login</Card.Title>
         <Inputs />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Form;
