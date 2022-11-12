import { combineReducers } from 'redux';
import ProductosReducer from './productos';
import CarritoReducer from './carrito';
import AuthReducer from './auth';

const rootReducer = combineReducers({
    productos: ProductosReducer,
    carrito: CarritoReducer,
    auth: AuthReducer
});
export default rootReducer;