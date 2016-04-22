import React from 'react';
import ReactDom from 'react-dom';
import {Button} from 'react-bootstrap';
import cx from 'classnames';
import './EditableInput.scss';

class EditableInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      readonly : true,
      value : this.props.text
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value : nextProps.text
    })
  }
  onEditClick(){
    this.setState({
      readonly : false
    })
    ReactDom.findDOMNode(this.refs.input).focus();
  }
  onInputBlur(){
    this.setState({
      readonly : true
    })
  }
  render(){
    let text = this.props.text;
    let readonly = this.state.readonly;
    return(
      <div className='edit-input'>
        <input
          ref='input'
          onBlur={this.onInputBlur.bind(this)}
          className='main-input' value={this.state.value} readOnly={readonly} />
        <Button
          onClick={this.onEditClick.bind(this)}
          className={cx('edit-btn', {hidden : !readonly})}>Edit</Button>
        <div className={cx('controls', {hidden : readonly})}>
          <Button>
            <i className="fa fa-check" aria-hidden="true"></i>
          </Button>
          <Button>
            <i className="fa fa-times" aria-hidden="true"></i>
          </Button>
        </div>
      </div>
    );
  }
}

export default EditableInput;
