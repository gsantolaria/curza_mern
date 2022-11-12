import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Privado = (props) => {
    const auth = useSelector(state => state.auth);

    return (
        <>
        { auth.authenticated ?
            <>{props.children}</>
        :
            <Navigate to='/' />
        }
        </>
    )

}
export default Privado;