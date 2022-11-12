import axios from 'axios';

export default function miAxios() {
    const nodeUrl = process.env.REACT_APP_NODE_URL;
    console.log(nodeUrl);
    axios.defaults.baseURL = nodeUrl;
    axios.defaults.timeout = 7000;

    const token = localStorage.getItem("token");
    if(token) {
        axios.interceptors.request.use (
            config => {
                config.headers['Authorization'] = 'Bearer '+token;
                return config;
            },
            error => {
                Promise.reject(error);
            }
        )
    }

    return axios;
}