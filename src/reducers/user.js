import * as Types from './../constants/UserAction';


let initialState = [];

const user = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_USER:
            state = action.user;
            const {token}=action.user.data;
            localStorage.setItem('token',token);
            return state;
        default: return state;

    }
}
export default user;