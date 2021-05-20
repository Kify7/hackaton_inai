import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { Navbar, Nav, Image, Container, Button } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="mr-auto">
          <Button variant="outline-secondary" className="space">
            <Nav.Link href="#home">Inicio</Nav.Link>
          </Button> 
          <Button variant="outline-secondary" className="space">
            <Nav.Link href="#">Estado</Nav.Link>
          </Button>
          <Button variant="outline-secondary" className="space">
            <Nav.Link href="#">Alcaldía</Nav.Link>
          </Button>
          <Button variant="outline-secondary" className="space">
              <Image></Image>
            <Nav.Link href="#">Partidos</Nav.Link>
          </Button>
          <Button variant="outline-secondary" className="space">
            <Nav.Link href="#">Candidatos</Nav.Link>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
