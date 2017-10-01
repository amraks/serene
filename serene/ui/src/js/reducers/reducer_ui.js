import { LOAD_LOGIN_MODAL, UNLOAD_LOGIN_MODAL, LOAD_SIGNUP_MODAL, UNLOAD_SIGNUP_MODAL } from '../actions/modalPopUpActions';

const initialModalState = {'showLoginModal' : false, 'showSignUpModal' : false}

export default function modalReducer(state = initialModalState, action) {
  console.log('modal reducer, action.type=', action.type);
  switch(action.type) {
    case LOAD_LOGIN_MODAL:
      return { showSignUpModal : false, showLoginModal : true };
    case UNLOAD_LOGIN_MODAL:
      return { showSignUpModal : false, showLoginModal : false };
    case LOAD_SIGNUP_MODAL:
      return { showSignUpModal : true, showLoginModal : false };
    case UNLOAD_SIGNUP_MODAL:
      return { showSignUpModal : false, showLoginModal : false };
  }
  return state;
}
