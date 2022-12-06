import { useReducer } from "react";
import ProductosReducer, { defaultState } from "./reducer";
import ProductosContext from "./context";
import miAxios from "utils/mi-axios";

const ProductosProvider = (props) => {
    const [state, dispatch] = useReducer(ProductosReducer, defaultState);

    const getProductos = (catSelected) => {
        const axios = miAxios();
        let filter = {};
        if(catSelected) {
            filter = { cat: catSelected }
        }

        axios.get('/productos',{ params: filter }).then((response)=>{
            console.log("GET PRODUCTOS("+catSelected+"): ", response.data)
            dispatch({type: 'PRODUCTOS_FETCH', payload: response.data})
        }).catch((error)=>{
            dispatch({type: 'FETCH_ERROR', payload: "Error al buscar los productos"})
        });
    }
    
    const addProductoCarrito = (prod) => {
        dispatch({type: 'ADD_PRODUCTO_CARRITO', payload: prod})
    }

    const stateValue = {
        ...state,
        getProductos,
        addProductoCarrito
    }

    return <ProductosContext.Provider value={stateValue}>{props.children}</ProductosContext.Provider>
}
export default ProductosProvider;