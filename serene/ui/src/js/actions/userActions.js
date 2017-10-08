const LOGIN_URL = '/login'
const SIGN_UP_URL = '/signup'

export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_SIGN_UP = 'USER_SIGN_UP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

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

let userSignUpSuccess = email => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: email
  }
}

let userSignUpFail = () => {
  return {
    type: USER_SIGNUP_FAIL,
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
      method : 'post',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        email : email,
        password : password
      })
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

export const doSignUp = (email, passwd, vpasswd) => {
  return dispatch => {
    fetch(SIGN_UP_URL, {
      method : 'post',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        email : email,
        password : password,
        verifyPassword : vpasswd
      })
    })
    .then(response => {
      console.log('response=', response)
      return response.json()
    })
    .then(json => {
      console.log('/signup json=', json)
      dispatch(userSignUpSuccess(json['email']))
    })
    .catch(error => {
      dispatch(userSignUpFail())
    })
  }
}
