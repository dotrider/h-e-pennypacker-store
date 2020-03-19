import axios from 'axios';

let initialState = {
    cart: []
};

const ADD_CART = 'ADD_CART'


export function addToCart(id){
    return {
        type: ADD_CART,
        payload: axios.post(`/api/cart/${id}`).then(res => res.data)
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_CART + '_FULFILLED':
            return {...state, cart: action.payload}
    
            default:
            return state
    }
}