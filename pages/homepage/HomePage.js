import React from 'react';
import GoogleMap from 'google-map-react';
import {Col, Row, Button, Modal, Input, ButtonInput, Grid} from 'react-bootstrap';
import './HomePage.scss';
import request from 'ajax-request';
import user from '../../components/utility/user';
import {connect} from 'react-redux';
import server from '../../api/serverProxy';
import {login, signout} from '../../redux/action/actions';
import {hashHistory} from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  login(){
    let {dispatch} = this.props;
    server.login().then(function(data){
      dispatch(login());
      hashHistory.push('/forms');
    })
  }
  render() {
    let {isGuest} = this.props;
    let loginBtn = isGuest ?
      (<ButtonInput className='postform-btn'
        onClick={this.login.bind(this)} value="Login" />) :
      (<ButtonInput className='postform-btn' value="Signout" />)
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


export default connect(mapStateToProps)(HomePage);
