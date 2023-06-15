
import {ADD_TO_CART} from './types'
import {REMOVE_FROM_CART} from './types'
import {CHANGE_COUNT} from './types'
import {CLEAR_CART} from './types'

export const addToCart = (item) => {

    return {
        type: ADD_TO_CART,
        product: item
    }

}
export const removeFromCart = (id) => {
    
    return{
        type: REMOVE_FROM_CART,
        id
    }
}
export const changeCount = (id, count) => {
    return{
        type: CHANGE_COUNT,
        data: {
            id,
            count
        }
    }
}
export const clearCart = () => {

    return{
        type: CLEAR_CART
    }
    
}