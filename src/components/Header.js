import React from 'react';
import { Container, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'



class Header extends React.Component {
  render() {
    
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      }} >
        <Navbar.Brand>Pokedex</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/roster" className="nav-link">Library</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
      </Navbar>      
    );
  }
}

export default Header;
