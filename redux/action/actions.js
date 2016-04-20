export const LOGIN_ACTION = 'LOGIN_ACTION';
export const SIGNOUT_ACTION = 'SIGNOUT_ACTION';

export login(){
  return {
    type : LOGIN_ACTION
  }
}

export signout(){
  return {
    type : SIGNOUT_ACTION
  }
}
