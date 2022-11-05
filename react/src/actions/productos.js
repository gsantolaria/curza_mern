import miAxios from "utils/mi-axios";
export function getProductos(catSelected) {
    const axios = miAxios();
    return (dispatch) => {

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
}

export function addProductoCarrito(prod) {
    return (dispatch) => {
        dispatch({type: 'ADD_PRODUCTO_CARRITO', payload: prod})
    }
}