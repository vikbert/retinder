import {storageGet, storageRemove, storageSet} from "../utils/LocalStorage";

const LOGIN = 'user.login';
const LOGOUT = 'user.logout';

const initialState = {
    username: storageGet('username') || null,
    token: storageGet('token') || null,
};

export const login = (user) => ({
    type: LOGIN,
    user,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            if (storageGet('username') === action.user.username) {
                console.log('User name exists!. The existing token used.');
                return state;
            }

            storageSet('username', action.user.username);
            storageSet('token', action.user.token);

            return {
                ...state,
                username: action.user.username,
                token: action.user.token,
            };
        case LOGOUT:
            storageRemove('username');
            storageRemove('token');

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
