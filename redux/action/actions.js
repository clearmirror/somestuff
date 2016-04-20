export const LOGIN_ACTION = 'LOGIN_ACTION';
export const SIGNOUT_ACTION = 'SIGNOUT_ACTION';

export function login(){
  return {
    type : LOGIN_ACTION
  }
}

export function signout(){
  return {
    type : SIGNOUT_ACTION
  }
}
