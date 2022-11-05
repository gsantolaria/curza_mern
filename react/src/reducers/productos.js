const ProductosReducer = (state = [], action) => {
    switch(action.type){
        case 'PRODUCTOS_FETCH':
            return action.payload;
        default:
    }
    return state;
}
export default ProductosReducer;