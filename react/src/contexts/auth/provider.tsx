import AuthContext from './context';
import miAxios from "utils/mi-axios";
import React, { useReducer } from 'react';
import AuthReducer, { defaultState } from './reducer';

type Props = {
    children: React.ReactNode,
    pirulin: boolean
}

const AuthProvider: React.FC<Props> = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, defaultState)

    const initAuth = () => {
        console.log("INIT AUTH ACTION");
        const token = localStorage.getItem("token");
        let storage: string = '';
        if (localStorage.getItem("user") != null){
            storage = localStorage.getItem("user") as string;
        }
        const user = JSON.parse(storage);
        if(token){
            dispatch({type: "INIT", payload:{authenticated: true, user: user }})
        } else {
            dispatch({type: "INIT", payload:{authenticated: false, user: null }})
        }
    }
    
    const login = (data:any) => {
        const axios = miAxios();
        axios.post('/login', data).then((response)=>{
            const token = response.data.token;
            if(token) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(response.data.userData));
            }
            dispatch({type: 'LOGIN', payload: response.data.userData})
        }).catch((error)=>{
            dispatch({type: 'FETCH_ERROR', payload: error})
        });
    }
    
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({type: 'LOGOUT'})
    }

    const stateValue = {
        ...state,
        initAuth,
        login,
        logout
    }

    return <AuthContext.Provider value={stateValue}>{props.children}</AuthContext.Provider>
}
export default AuthProvider; 