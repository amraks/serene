const LOGIN_URL = '/login'

export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

let userLogInSuccess = email => {
  console.log('In userLogInSuccess, email=', email)
  return {
    type: USER_LOGIN_SUCCESS,
    payload: email
  }
}

let userLoginFail = () => {
  return {
    type: USER_LOGIN_FAIL,
    payload: null
  }
}

export const doLogout = () => {
  return {
    type : USER_LOGOUT,
    payload : null
  }
}

export const doLogin = (email, password) => {
  return dispatch => {
    fetch(LOGIN_URL, {
      method : 'post'
    })
    .then(response => {
      console.log('response=', response)
      return response.json()
    })
    .then(json => {
      console.log('/login json=', json)
      dispatch(userLogInSuccess(json['email']))
    })
    .catch(error => {
      dispatch(userLoginFail())
    })
  }
}
