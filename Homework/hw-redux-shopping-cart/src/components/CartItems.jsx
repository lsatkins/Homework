
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {formatCurrency, displayCount} from './utils'
import { removeFromCart } from '../actions/cartActions'
import { changeCount } from '../actions/cartActions'
import { Link } from 'react-router-dom';


const CartItems = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const numberOfItems = useSelector(state => state.cart.numberOfItems)
  const totalCost = useSelector(state => state.cart.totalCost)
  const dispatch = useDispatch()
  const [counts, setCounts] = useState(cartItems.map((item) => {
    return item.count
  }));

  const handleCountChange = (index, value, id) => {
    const newCounts = [...counts];
    let varValue = value
    if(isNaN(value)){
      varValue = 0
    }
    if(value === '' || value === "0"){
      varValue = 0
    }
    if(typeof(value) === 'string'){
      varValue = Number(value)
    }
    newCounts[index] = varValue;
    setCounts(newCounts);
    dispatch(changeCount(id, newCounts[index]))
  };

  useEffect(() => {
    
  
    
  }, [removeFromCart()])
  



  return (
    <>
      <h1>Your Cart</h1>
      {

        numberOfItems === 0
         ? 
         <div className="mb-4">Cart is empty</div> : <div className="mb-4">You have <em>{numberOfItems}</em> items in your cart
         <br/>
         Total Cost: {formatCurrency(totalCost)}
         </div>
        

      }

      <Fade left cascade>

        <div className="row cart-items">


          {
            cartItems.map((item, index) => {
              let itemCount = item.count;
              return <div className="col-12 d-flex flex-column">

                <div className="d-flex">

                <div>
                  <img src={item.image} alt=""></img>
                </div>
                <div>{item.title}</div>

                </div>
                <div className="mb-4">
                  {formatCurrency(item.price * item.count)} &nbsp;
                  <label for='quantity'>Quantity:</label> &nbsp;
                  <input name="quantity" value={displayCount(itemCount)} style={{ width: '30px' }} type="text" onChange={(e)=>handleCountChange(index ,e.target.value, item.id)}></input>
                  <button onClick={()=>dispatch(removeFromCart(item.id))} className="btn btn-warning">Remove</button>
                </div>

              </div>
            })
          }
          {cartItems.length > 0 ? 
          <div className="d-flex justify-content-center">
          <Link to='/checkout'>
          <button className="btn btn-success" style={{width: "150px"}}>Proceed To Checkout</button>
          </Link>
          </div>
           : null
          }

        </div>

      </Fade>
    </>
  )
}

export default CartItems
