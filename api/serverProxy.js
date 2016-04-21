import request from 'ajax-request';
import dateFormat from 'dateformat';

let config = {
  url : '',
  port : 0
}

// remove
function getEntry(){
  let id = (Math.random()*10000).toPrecision(3);
  return {
    nickname : 'nickname ' + id,
    location : 'location ' + id,
    price : '$' + id,
    discount : id/100 + '%'
  }
}

function getHistoryEntry(){
  let rnd = (Math.random()*10000).toPrecision(3);
  let timeStamp = Date.now() - rnd;

  return {
    time : dateFormat(new Date(timeStamp), 'yyyy-mm-dd-hh-MM-ss'),
    price : rnd,
    bank : 'bank ' + rnd

  }
}


class ServerProxy{
  login(un, pw){
    // authentication and set session stuff
    return Promise.resolve({
      status : 'success',
      token : '1234'
    });
  }

  getForm(){
    let number = 10, ret = [];
    for(let i=0; i<number; i++){
      ret.push(getEntry());
    }
    return Promise.resolve({
      id : -1,
      content : ret
    });
  }

  getHistory(formId = -1){
    let number = 10, ret = [];
    for(let i=0; i<number; i++){
      ret.push(getHistoryEntry());
    }
    return Promise.resolve({
      id : -1,
      content : ret
    })
  }



}

export default new ServerProxy();
