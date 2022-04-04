import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Productdata from '../data/Productdata'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems.value)

  const [cartProducts, setCartProducts] = useState(Productdata.getCartItemsDetail(cartItems))

  useEffect(() => {
    setCartProducts(Productdata.getCartItemsDetail(cartItems))
  }, [cartItems])

  return (
    <Helmet title="Cart">
      <div className="cart">
        {cartItems.length > 0 ? (
          <div className="cart__info">
            <div className="cart__info__title">Shopping Bag</div>
            <form>
              <table className="cart__info__table">
                <thead>
                  <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))}
                </tbody>
              </table>
            </form>
            <div className="cart__info__btn">
              <button><span>Checkout</span></button>
            </div>
          </div>
        ) : (
          <div className="cart__message">Your cart is empty.</div>
        )}
      </div>
    </Helmet>
  )
}

export default Cart
