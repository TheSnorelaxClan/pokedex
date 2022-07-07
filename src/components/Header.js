import React from 'react';
import { Container, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'



class Header extends React.Component {
  render() {
    return (
      <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Pokedex</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/roster" className="nav-link">Library</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
        </Navbar>
        <Container className="d-flex justify-content-center">
          <img className='poke-logo'
            src="./img/logo.png"
            alt="pokemon logo"
          />
        </Container>
          <div class="stage">
            <div class="poke bounce"></div>
          </div>
      </>
    );
  }
}

export default Header;
