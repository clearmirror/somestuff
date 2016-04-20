import React from 'react';
import GoogleMap from 'google-map-react';
import {Col, Row, Button, Modal, Input, ButtonInput, Grid} from 'react-bootstrap';
import './HomePage.scss';
import request from 'ajax-request';
import user from '../../components/utility/user';
import {connect} from 'react-redux';
import server from '../../api/serverProxy';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  login(){
    server.login().then(function(data){
      console.log(data);
    })
  }
  render() {
    let {isGuest} = this.props;
    let loginBtn = isGuest ?
      (<ButtonInput className='postform-btn'
        onCLick={this.login} type="submit" value="Login" />) :
      (<ButtonInput className='postform-btn' type="submit" value="Signout" />)
    return (
      <Row>
        <Col xs={12}>
          <form>
            <Input type="text" label="Username" placeholder="Username" />
            <Input type="password" label="Password" placeholder="Password"/>
            {loginBtn}
          </form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state){
  return {
    isGuest : state.isGuest
  }
}


export default HomePage;
