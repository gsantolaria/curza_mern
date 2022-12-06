import { createContext } from 'react';
import { defaultState } from './reducer';

const AuthContext = createContext({
    ...defaultState,
    initAuth: () => {},
    login: (data: any) => {},
    logout: () => {}
});
export default AuthContext;