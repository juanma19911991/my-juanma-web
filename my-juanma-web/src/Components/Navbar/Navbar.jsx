import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { } from '@fortawesome/free-brands-svg-icons';
import { CardComponent } from '../Cards/Card'
import { NavLink } from 'react-router-dom';



export const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variante="light">
        <Navbar.Brand href="#/">JuanmaWEB</Navbar.Brand>

        <Nav ClassName="asd">
          <Nav.Link as={NavLink} exact={true} activeClassName="active" to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/A">Categoria A</Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/B">Categoria B</Nav.Link>
        </Nav>
      
      </Navbar>
    </>

  )
}

