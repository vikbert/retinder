import cookie from 'js-cookie';

const LOGIN = 'user.login';
const LOGOUT = 'user.logout';

const initialState = {
    username: cookie.get('username') || null,
    token: cookie.get('token') || null,
};

export const login = (user) => ({
    type: LOGIN,
    user,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            if (cookie.get('username') === action.user.username && cookie.get('token') !== '') {
                console.log('User name exists!. The existing token used.');
                return state;
            }
            
            cookie.set('username', action.user.username);
            cookie.set('token', action.user.token);

            return {
                ...state,
                username: action.user.username,
                token: action.user.token,
            };
        case LOGOUT:
            cookie.remove('username');
            cookie.remove('token');
            document.location.assign('/login');

            return {
                ...state,
                username: null,
                token: null,
            };
        default:
            return state;

    }
};

export default reducer;
