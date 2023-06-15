

import {ADD_TO_CART} from '../actions/types'
import {REMOVE_FROM_CART} from '../actions/types'
import {CHANGE_COUNT} from '../actions/types'
import {CLEAR_CART} from '../actions/types'

const cartReducer = (state, action) => {
  
    if(state === undefined){
        state = {
            cartItems: [],
            numberOfItems: 0,
            totalCost: parseFloat(0.00)
        }
    }

    switch(action.type){

        case ADD_TO_CART:
            action.product.count = 1;
            action.product.quantityCost = action.product.price
            
            return {
                ...state,
                cartItems: state.cartItems.concat(action.product),
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price)
            }

        case REMOVE_FROM_CART: 

            let index = state.cartItems.findIndex(item => {

                return item.id === action.id
            }
            
            )
            let deletedItem = state.cartItems[index]
            
            return {
                ...state,
                cartItems: state.cartItems.slice(0,index).concat(state.cartItems.slice(index + 1)),
                numberOfItems: state.numberOfItems - deletedItem.count,
                totalCost: state.totalCost - parseFloat(deletedItem.quantityCost)

            }

        case CHANGE_COUNT:
            
            let originalCount;
            let newCost = 0;

            let newItems = state.cartItems.map(item=>{
                if(item.id === action.data.id){
                    originalCount = item.count
                    item.count = action.data.count
                    item.quantityCost = action.data.count * item.price
                    newCost = newCost + item.quantityCost
                    console.log('if new', newCost)

                    return item
                } else{
                    console.log('in else', newCost, item.quantityCost)
                    newCost = newCost + item.quantityCost
                    console.log('else new', newCost)
                    return item
                }
            })

            let difference = originalCount - action.data.count
            console.log(newCost)


            

            return {
                ...state,
                cartItems: newItems,
                numberOfItems: state.numberOfItems - difference,
                totalCost: parseFloat(newCost)
            }

        case CLEAR_CART:

            return {
                ...state,
                cartItems: [],
                numberOfItems: 0,
                totalCost: 0

            }

            

            default: 
                return state;
    }

}

export default cartReducer