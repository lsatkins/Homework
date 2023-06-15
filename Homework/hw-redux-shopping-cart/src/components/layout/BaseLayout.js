
import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const BaseLayout = (props) => {
  const cartCount = useSelector(state=>state.cart.numberOfItems)
  return (
    <>
  <div className="d-flex justify-content-between w-100">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
    <Link to="/checkout">
      <figure style={{ position: "relative", display: "inline-block" }}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/157/893/small/shopping-cart-set-of-shopping-cart-icon-on-white-background-shopping-cart-icon-shopping-cart-design-shopping-cart-icon-sign-shopping-cart-icon-isolated-shopping-cart-symbol-free-vector.jpg" style={{ height: '100px' }} alt="" />
        <figcaption style={{ color: "white", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          {cartCount}
        </figcaption>
      </figure>
    </Link>
  </div>
  {props.children}
</>

  )
}


export default BaseLayout
