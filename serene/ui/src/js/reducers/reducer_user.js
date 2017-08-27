export default function (state = null, action) {
    switch (action.type) {
        case 'DO_LOGIN':
            return action.payload;
            break;
        case 'DO_LOGOUT':
            return action.payload;
    }
    return state;
}
