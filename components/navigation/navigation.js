import React from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Col } from 'react-bootstrap';
import './navigation.scss';

class Navigation extends React.Component{

  goto(url){
    hashHistory.push(url);
  }
  render() {
    let signoutBtn = this.props.isGuest ? '' : (<NavItem>Signout</NavItem>)
    return (
      <Navbar className="app-nav row">
        <Col xs={12}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={this.goto.bind(this, '/forms')}>Forms</NavItem>
          </Nav>
          <Nav pullRight>
            {signoutBtn}
          </Nav>
        </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}

function mapStateToProps(state){
  return {
    isGuest : state.isGuest
  }
}

export default connect(mapStateToProps)(Navigation);
