import React from 'react';
import server from '../../api/serverProxy';
import { Row, Col } from 'react-bootstrap';
import './formPage.scss';

class FormPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : []
    }
    let self = this;
    server.getForm().then(function(data){
      self.setState({
        data : data.content
      })
    })
  }

  render(){
    console.log(this.state);
    let ele = this.state.data.map((d, i) => {
      return (
        <Row key={i}>
          <Col xs={6} sm={3} className='nickname'>{d.nickname}</Col>
          <Col xs={6} sm={3}>{d.location}</Col>
          <Col xs={4} sm={2}>{d.price}</Col>
          <Col xs={4} sm={2}>{d.discount}</Col>
          <Col xs={4} sm={2}>Show history</Col>
        </Row>
      )
    })
    let eleMobile = this.state.data.map((d, i) => {
      return (
        <Row key={i}>
          <Col xs={6}>Nickname</Col><Col xs={6}>{d.nickname}</Col>
          <Col xs={6}>Location</Col><Col xs={6}>{d.location}</Col>
          <Col xs={6}>Price</Col><Col xs={4}>{d.price}</Col>
          <Col xs={6}>Discount</Col><Col xs={4}>{d.discount}</Col>
          <Col xs={12}>Show history</Col>
        </Row>
      )
    })
    return(
      <div className='formPage'>
        <div className='hidden-xs'>
          <Row className='labelRow'>
            <Col xs={6} sm={3} className='nickname'>Nickname</Col>
            <Col xs={6} sm={3}>Location</Col>
            <Col xs={4} sm={2}>Price</Col>
            <Col xs={4} sm={2}>Discount</Col>
          </Row>
          {ele}
        </div>
        <div className='visible-xs'>
          {eleMobile}
        </div>
      </div>
    );

  }
}

export default FormPage;
