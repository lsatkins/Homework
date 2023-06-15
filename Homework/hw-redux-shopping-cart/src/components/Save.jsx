import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import {deleteSaved} from '../actions/productActions'


const Products = () => {

  const dispatch = useDispatch()
  const saved = useSelector(state=>state.products.saved)
  console.log(saved)
  if(saved.length === 0){
    return <div>No Products Saved</div>
  }
  
  


  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Saved Items</h1>

            <Fade right cascade>
            <div className="row">
              {saved.length !== 0 && saved.map((productObj, index)=>{
                console.log(index)

                return (
                    <div key={productObj.id} className="col-12 mb-5">
                    <Link to={`/products/details/${productObj.id}`} className="text-success d-flex">
                      <img src={productObj.image} style={{ width: "50px" }} alt=""></img>
                      <p className="ms-3">{productObj.title}</p>
                    </Link>
                    <button onClick={()=>dispatch(deleteSaved(index))} className="btn btn-warning" style={{height: "24.5px"}}>Remove</button>
                  </div>
                )
              })}
            </div>
            </Fade>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Products
