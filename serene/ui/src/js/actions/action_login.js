export const doLogin = (email, password) => {
    return {
        type: 'DO_LOGIN',
        payload: email
    }
}

export const doLogout = () => {
    return {
        type: 'DO_LOGOUT',
        payload: null
    }
}
