export const LOAD_LOGIN_MODAL = 'LOAD_LOGIN_MODAL';
export const LOAD_SIGNUP_MODAL = 'LOAD_SINGUP_MODAL';
export const UNLOAD_LOGIN_MODAL = 'UNLOAD_LOGIN_MODAL';
export const UNLOAD_SIGNUP_MODAL = 'UNLOAD_SIGNUP_MODAL';

export const loadLoginModal = () => {
  console.log('action: loadLoginModal');
  return {
    type : LOAD_LOGIN_MODAL
  }
}

export const loadSignUpModal = () => {
  console.log('action: loadSignUpModal');
  return {
    type : LOAD_SIGNUP_MODAL
  }
}

export const unloadLoginModal = () => {
  console.log('action: unloadLoginModal');
  return {
    type : UNLOAD_LOGIN_MODAL
  }
}

export const unloadSignUpModal = () => {
  console.log('action: unloadSignUpModal');
  return {
    type : UNLOAD_SIGNUP_MODAL
  }
}
