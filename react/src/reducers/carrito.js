const CarritoReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_PRODUCTO_CARRITO':
            const newItem = {};
            newItem.prod = action.payload;
            if(state[action.payload._id]) {
                newItem.count = state[action.payload._id].count + 1;
            } else {
                newItem.count = 1;
            }
            return Object.assign({},state, {[action.payload._id]: newItem});
        default:
            return state;
    }
}
export default CarritoReducer;