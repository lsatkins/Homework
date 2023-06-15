import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {formatCurrency, displayCount} from './utils'
import {clearCart} from '../actions/cartActions'

const Checkout = () => {

    const cartItems = useSelector(state=>state.cart.cartItems)
    const totalCost = useSelector(state=>state.cart.totalCost)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
        alert('Thank you for your order!')
        navigate('../products')
    }
  return (
    <>
    
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {cartItems.map(item=>(
                        <div className="row mb-2">
                            <div className="col-12 d-flex">
                                <img className="me-5" src={item.image} style={{height: "100px", width:"50px"}} alt=""></img>
                                <div className="row flex-column ms-5">
                                    <h3>{item.title}</h3>
                                    <p>Quantity: {displayCount(item.count)}</p>
                                    <p>Cost: {formatCurrency(item.quantityCost)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <div className="row"><h1>Order Summary</h1></div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-around">
                            <p>Items:</p><p>{formatCurrency(totalCost)}</p> 
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <p>Before Tax:</p><p>{formatCurrency(totalCost)}</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <p>Tax Amount:</p><p>{formatCurrency(totalCost * .085)}</p>
                        </div>
                    </div>
                    <div className="row w-50">
                        <div className="col-12 d-flex justify-content-between text-danger">
                            <h2>Order Total:</h2>
                            <h2>{formatCurrency(totalCost * 1.085)}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={()=>handleClearCart()} className="btn btn-warning">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Checkout
