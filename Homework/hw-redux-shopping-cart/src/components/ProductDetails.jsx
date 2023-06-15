import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {formatCurrency} from './utils'
import {addToCart} from '../actions/cartActions'


const ProductDetails = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state=>state.products.products.filter(product => product.id === id))
    console.log(product)
    let {title, image, description, availableSizes, price} = product[0]

    const backToProducts = (product) => {
        dispatch(addToCart(product))
        navigate('../../products')
    }
  return (
    <>
    
    <div className="container">
        <div className="row">
            <div className="col-6">
                <h1>{title}</h1>
                <img src={image} alt=""></img>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
                <div className='mb-4'><b>Description: </b>{description}</div>
                <div className='mb-4'><b>Sizes: </b>{availableSizes}</div>
                <div className='mb-4'><b>Price: </b>{formatCurrency(price)}</div>
                <div className="buttons">
                    <button onClick={()=>backToProducts(product[0])} className="btn btn-warning me-4">
                            Add To Cart
                    </button>
                </div>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ProductDetails
