import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/userActions';

export default function (state = null, action) {
    switch (action.type) {
        case USER_LOGIN_FAIL:
            return action.payload;
        case USER_LOGIN_SUCCESS:
            return action.payload;
        case USER_LOGOUT:
            return action.payload;
    }
    return state;
}
