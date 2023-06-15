
import {LOAD_PRODUCTS} from '../actions/types'
import {SAVE_PRODUCT} from '../actions/types'
import {DELETE_SAVED} from '../actions/types'

const productsReducer = (state, action) => {
  
    if(state === undefined){
        state = {
            products: [],
            saved: []
        }
    }

    switch(action.type){

        case LOAD_PRODUCTS:
            return{
                ...state,
                products: action.product
            }

        case SAVE_PRODUCT:
            return{
                ...state,
                saved: [...state.saved, action.item]
            }

        case DELETE_SAVED:
            return{
                ...state,
                saved: [...state.saved.slice(0, action.index), ...state.saved.slice(action.index + 1)]
            }

            default:
                return state
    }

}

export default productsReducer
