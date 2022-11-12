const AuthReducer = (state = {authenticated: false, user: null}, action) => {
    switch(action.type){
        case 'INIT':
            console.log("INIT AUTH:", action.payload);
            return {authenticated: action.payload.authenticated, user: action.payload.user}
        case 'LOGIN':
            return {authenticated: true, user: action.payload}
        case 'LOGOUT':
            return {authenticated: false, user: null}
        default:
            return state;
    }
}
export default AuthReducer;