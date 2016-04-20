import {LOGIN_ACTION, SIGNOUT_ACTION} from '../action/actions';

export default function isGuest(state = true, action){
  switch(action.type){
    case LOGIN_ACTION :
      return false;
    case SIGNOUT_ACTION :
      return true;
    default :
      return state;
  }
}
