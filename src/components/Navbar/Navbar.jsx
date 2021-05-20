import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Nav.css';
import { Navbar, Nav, Image, Container, Button } from "react-bootstrap";
import inicio from '../../images/NavItems/inicio.png';
import estado from '../../images/NavItems/estado.png';
import alcaldia from '../../images/NavItems/alcaldia.png';
import partidos from '../../images/NavItems/partidos.png';
import candidatos from '../../images/NavItems/candidatos.png';


const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="mr-auto">
          <Button variant="outline-secondary" className="space">
          <Image style={{ backgroundImage: `url(${inicio})`, backgroundSize: 'cover' }} className='icon'/>
            <Nav.Link href="#home">Inicio</Nav.Link>
          </Button> 
          <Button variant="outline-secondary" className="space">
          <Image style={{ backgroundImage: `url(${estado})`, backgroundSize: 'cover' }} className='icon'/>
            <Nav.Link href="#">Estado</Nav.Link>
          </Button>
          <Button variant="outline-secondary" className="space">
          <Image style={{ backgroundImage: `url(${alcaldia})`, backgroundSize: 'cover' }} className='icon'/>
            <Nav.Link href="#">Alcaldía</Nav.Link>
          </Button>
          <Button variant="outline-secondary" className="space" >
          <Image style={{ backgroundImage: `url(${partidos})`, backgroundSize: 'cover' }} className='icon'/>
            <Nav.Link href="#">Partidos</Nav.Link>
          </Button>
          <Button variant="outline-secondary" className="space">
          <Image style={{ backgroundImage: `url(${candidatos})`, backgroundSize: 'cover' }} className='icon'/>
            <Nav.Link href="#">Candidatos</Nav.Link>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
