export const defaultState = {
    productos: []
}

const ProductosReducer = (state, action) => {
    switch(action.type){
        case 'PRODUCTOS_FETCH':
            return {...state, productos: action.payload};
        default:
    }
    return state;
}
export default ProductosReducer;