import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import server from '../../api/serverProxy';
import './historyPage.scss';

class SortControl extends React.Component{

  render(){
    return (
      <div className='sort-control'>
        <Button className='sort-up' onClick={this.props.lowToHigh}>
          <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
        </Button>
        <Button className='sort-down' onClick={this.props.highToLow}>
          <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </Button>
      </div>
    )
  }
}

class HistoryPage extends React.Component{
  constructor(props){
    super(props);
    let self = this;
    this.state = {
      data : []
    }
    server.getHistory().then((data) => {
      self.setState({
        data : data.content
      });
    })
  }

  sort(type, inverse){
    let tmp = this.state.data;
    if(!inverse){
      tmp = tmp.sort((a, b) => a[type] < b[type] ? -1 : 1);
    }else{
      tmp = tmp.sort((a, b) => a[type] > b[type] ? -1 : 1);
    }
    this.setState({
      data : tmp
    })
  }
  render(){
    return (
      <div className='history-page'>
        <Row className='control-row'>
          <Col xs={12}>
            <input placeholder='From' type='date'></input>
            <span className='toSep'>to</span>
            <input placeholder='To' type='date'></input>
            <Button bsStyle='primary'>Update</Button>
          </Col>
        </Row>

        <div className='desktop-only hidden-xs'>
          <Row className='label-row'>
            <Col sm={4}><span>Time</span>
              <SortControl
                lowToHigh={this.sort.bind(this, 'time', false)}
                highToLow={this.sort.bind(this, 'time', true)}
                />
            </Col>
            <Col sm={4} className='grey-bg'>Price
              <SortControl
                lowToHigh={this.sort.bind(this, 'price', false)}
                highToLow={this.sort.bind(this, 'price', true)}
              />
            </Col>
            <Col sm={4}>Bank
              <SortControl
                lowToHigh={this.sort.bind(this, 'bank', false)}
                highToLow={this.sort.bind(this, 'bank', true)}/>
            </Col>
          </Row>
          {
            this.state.data.map((d, i) => (
              <Row key={i} className='history-data-row'>
                <Col sm={4}>{d.time}</Col>
                <Col sm={4} className='grey-bg'>{d.price}</Col>
                <Col sm={4}>{d.bank}</Col>
              </Row>
            ))
          }
        </div>
        <div className='mobile-only visible-xs'>
        {
          this.state.data.map((d, i) => (
            <Row key={i} className='history-data-row'>
              <Col xs={6}>
                Time
                <SortControl
                  lowToHigh={this.sort.bind(this, 'time', false)}
                  highToLow={this.sort.bind(this, 'time', true)}
                />
              </Col>
              <Col xs={6}>{d.time}</Col>
              <Col xs={6} className='grey-bg'>
                Price
                <SortControl
                  lowToHigh={this.sort.bind(this, 'price', false)}
                  highToLow={this.sort.bind(this, 'price', true)}
                />
              </Col>
              <Col xs={6} className='grey-bg'>{d.price}</Col>
              <Col xs={6}>
                Bank
                <SortControl
                  lowToHigh={this.sort.bind(this, 'bank', false)}
                  highToLow={this.sort.bind(this, 'bank', true)}
                />
              </Col>
              <Col xs={6}>{d.bank}</Col>
            </Row>
          ))
        }
        </div>
      </div>
    )
  }
}

export default HistoryPage;
