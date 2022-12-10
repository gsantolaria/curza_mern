type usuario = {
    _id: string,
    username: string,
    nombre: string
}

type authState = {
    authenticated: boolean,
    user: usuario | null; 
}

export const defaultState: authState = {
    authenticated: false, 
    user: null
}

type authActionType = 
    { type: 'INIT', payload: authState } |
    { type: 'LOGIN', payload: usuario | null } |
    { type: 'LOGOUT' } |
    { type: 'FETCH_ERROR', payload: any }

const AuthReducer = (state: authState, action: authActionType) => {
    switch(action.type){
        case 'INIT':
            console.log("INIT AUTH:", action.payload);
            return {...state, authenticated: action.payload.authenticated, user: action.payload.user}
        case 'LOGIN':
            return {...state, authenticated: true, user: action.payload}
        case 'LOGOUT':
            return {...state, authenticated: false, user: null}
        default:
            return state;
    }
}
export default AuthReducer;