import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import styled from "@emotion/styled";
const TextoHeader = styled.h1`
  display: center;
  text-align: left;
  font: normal normal 600 50px/60px Lato;
  letter-spacing: 0px;
  color: #0e2146;
  padding: 2rem;
  margin: 0;
  font-family: "Lato", serif;
`;

const Header = ({ titulo }) => {
  return (
    <Jumbotron fluid>
      <Container>
          <Row>
            <Col xs={6} md={3}>
            <Image src='https://raw.githubusercontent.com/mxabierto/assets/master/img/logos/inai.png' rounded />
            </Col>
            <Col xs={6} md={9}>
                <TextoHeader>{titulo}</TextoHeader>
            </Col>
          </Row>
       
      </Container>
    </Jumbotron>
  );
};

export default Header;
