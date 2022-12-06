import AuthContext from 'contexts/auth/context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const Privado = (props) => {
    const authContext = useContext(AuthContext);

    return (
        <>
        { authContext.authenticated ?
            <>{props.children}</>
        :
            <Navigate to='/' />
        }
        </>
    )

}
export default Privado;