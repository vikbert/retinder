import cookie from 'js-cookie';

const LOGIN = 'user.login';
const LOGOUT = 'user.logout';

const initialState = {
    username: cookie.get('username') || null,
};

export const login = (username) => ({
    type: LOGIN,
    username,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            cookie.set('username', action.username);

            return {
                ...state,
                username: action.username,
            };
        case LOGOUT:
            cookie.remove('username');
            document.location.assign('/login');

            return {
                ...state,
                username: null,
            };
        default:
            return state;

    }
};

export default reducer;
