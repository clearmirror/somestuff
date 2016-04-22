import React from 'react';
import server from '../../api/serverProxy';
import { Row, Col, Button, Pagination } from 'react-bootstrap';
import {Link, hashHistory} from 'react-router';
import './formPage.scss';
import EditableInput from '../../components/editinput/EditableInput';

const recordPerPage = 5;
class FormPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : [],
      activePage : 1
    }
    let self = this;
    server.getForm().then(function(data){
      self.setState({
        data : data.content,
        activePage : 1
      })
    })
  }

  onHistoryBtnClicked(){

  }

  handleSelect(dispatch, idxObj){
    let idx = idxObj.eventKey;
    this.setState({
      activePage : idx
    });

  }

  render(){
    let {data, activePage} = this.state;
    let currentData =data.slice(recordPerPage*(activePage-1), recordPerPage*activePage);

    console.log(currentData);
    //console.log(currentData);
    let ele = currentData.map((d, i) => {
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
    let eleMobile = currentData.map((d, i) => {
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
        <div className='pagination-container'>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={Math.ceil(this.state.data.length/recordPerPage)}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect.bind(this)} />
        </div>
      </div>
    );

  }
}

export default FormPage;
