import { combineReducers } from 'redux';
import ProductosReducer from './productos';
import CarritoReducer from './carrito';

const rootReducer = combineReducers({
    productos: ProductosReducer,
    carrito: CarritoReducer
});
export default rootReducer;