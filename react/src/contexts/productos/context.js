import { createContext } from 'react';
import { defaultState } from './reducer';

const ProductosContext = createContext({
    ...defaultState,
    getProductos: () => {},
    addProductoCarrito: () => {}
});
export default ProductosContext;