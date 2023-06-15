import {LOAD_PRODUCTS} from './types'
import {SAVE_PRODUCT} from './types'
import {DELETE_SAVED} from './types'

export const loadProducts = (data) => {
  
    return {
        type: LOAD_PRODUCTS,
        product: data
    }

}
export const saveProduct = (item) => {
    return{
        type: SAVE_PRODUCT,
        item
    }
}
export const deleteSaved = (index) => {
    return{
        type: DELETE_SAVED,
        index
    }
}
