import React from "react";
import { Navbar, Container} from "react-bootstrap";

const Footer = ({ derechos}) => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">{derechos}</Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Footer;
