import miAxios from "utils/mi-axios";

export function initAuth() {
    return dispatch => {
        console.log("INIT AUTH ACTION");
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        if(token){
            dispatch({type: "INIT", payload:{authenticated: true, user: user }})
        } else {
            dispatch({type: "INIT", payload:{authenticated: false, user: null }})
        }
    }
}

export function login(data) {
    const axios = miAxios();
    return (dispatch) => {
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
}

export function logout(data) {
    const axios = miAxios();
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch({type: 'LOGOUT'})
    }
}
