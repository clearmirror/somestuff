import React from 'react';
import server from '../../api/serverProxy';
import { Row, Col, Button } from 'react-bootstrap';
import {Link, hashHistory} from 'react-router';
import './formPage.scss';
import EditableInput from '../../components/editinput/EditableInput';

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

  onHistoryBtnClicked(){

  }

  render(){
    console.log(this.state);
    let ele = this.state.data.map((d, i) => {
      return (
        <Row key={i}>
          <Col xs={6} sm={3} className='nickname grey'>
            <EditableInput text={d.nickname}/>
          </Col>
          <Col xs={6} sm={3} className=''>
            <EditableInput text={d.location}/>
          </Col>
          <Col xs={4} sm={2} className='grey'>
            <EditableInput text={d.price}/>
          </Col>
          <Col xs={4} sm={2}>
            <EditableInput text={d.discount}/>
          </Col>
          <Col xs={4} sm={2}>
            <Link to='/history/1'>Show history</Link>
          </Col>
        </Row>
      )
    })
    let eleMobile = this.state.data.map((d, i) => {
      return (
        <Row key={i}>
          <Col xs={6} className='grey'>Nickname</Col>
          <Col xs={6}>
            <EditableInput text={d.nickname}/>
          </Col>
          <Col xs={6}>Location</Col>
          <Col xs={6}>
            <EditableInput text={d.location}/>
          </Col>
          <Col xs={6} className='grey'>Price</Col>
          <Col xs={4}>
            <EditableInput text={d.price}/>
          </Col>
          <Col xs={6}>Discount</Col>
          <Col xs={4}>
            <EditableInput text={d.discount}/>
          </Col>
          <Col xs={12}>
            <Link to='/history/1'>Show history</Link>
          </Col>
        </Row>
      )
    })
    return(
      <div className='formPage'>
        <div className='hidden-xs'>
          <Row className='labelRow'>
            <Col xs={6} sm={3} className='grey nickname'>
              Nickname
            </Col>
            <Col xs={6} sm={3}>Location</Col>
            <Col xs={4} sm={2} className='grey'>Price</Col>
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
