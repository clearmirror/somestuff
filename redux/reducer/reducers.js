import { combineReducers } from 'redux';
import login from './login';

const reducers = combineReducers({
  isGuest : login
})

export default reducers;
