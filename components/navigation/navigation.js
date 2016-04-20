import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './navigation.scss';

var Navigation = React.createClass({
  render: function() {
    return (
      <Navbar className="app-nav row">
        <div className='col-xs-12'>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/about">Home</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>Login</NavItem>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
});

export default Navigation;
