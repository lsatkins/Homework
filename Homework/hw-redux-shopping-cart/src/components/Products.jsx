import React, {useEffect} from 'react'
import data from '../assets/data'
import {useDispatch, useSelector} from 'react-redux'
import {loadProducts, saveProduct} from '../actions/productActions'
import Fade from 'react-reveal/Fade'
import {formatCurrency} from './utils'
import {addToCart} from '../actions/cartActions'
import CartItems from './CartItems'
import Save from './Save'

const Products = () => {

  // console.log(data)
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products.products)

  useEffect(() => {
    
    dispatch(loadProducts(data))
  
  }, [])
  


  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-8">

            <Fade bottom cascade>
            <div className="row">
              {products.map(productObj=>{

                return (
                  <div key={productObj.id} className="col-4 mb-5 product">

                    <a href={`./products/details/${productObj.id}`} className="text-danger">
                      <img src={productObj.image} alt=""></img>
                      <p className="mt-3">{productObj.title}</p>
                    </a>

                    <div className="d-flex justify-content-around">

                      <div>{formatCurrency(productObj.price)}</div>
                      <div className="buttons d-flex flex-column align-center">
                        <button onClick={()=>dispatch(addToCart(productObj))} className="btn btn-warning mb-2">
                          Add To Cart
                        </button>
                        <button onClick={()=>dispatch(saveProduct(productObj))} className="btn btn-primary">Save For Later</button>
                      </div>
                      

                    </div>

                  </div>
                )
              })}
            </div>
            </Fade>
          </div>
          <div className="rightSide col-4">
            <div><CartItems/></div>
            <div><Save/></div>
          </div>
          
        </div>
      </div>
      
      
    </>
  )
}

export default Products
