import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartItemsSlice'


const ProductCard = props => {
  const [selected, setSelected] = useState('')

  const dispatch = useDispatch()

  const cartRef = useRef()


  const check = () => {
    if(selected === '') {
      alert('Please select size!')
      return false
    }
    return true
  }

  const addToCart = () => {
    if(check()) {
      dispatch(addItem({
        productId: props.id,
        size: selected,
        quantity: 1,
        price: props.price
      }))
      cartRef.current.textContent = 'adding...'
      setTimeout(() => {
        cartRef.current.textContent = 'add to bag'
      }, 500)
    }
  }

  return (
    <div className="product__card">
      <div className="product__card__top">
        <div className="product__card__top__image">
          <Link to={props.path}>
            <img src={props.img} alt="product" />
          </Link>
        </div>
        <div className="product__card__top__quick">
          <div className="product__card__top__quick__title">Select size</div>
          <div className="product__card__top__quick__select">
            {props.size.map((item, index) => (
              <span
                key={index}
                className={`${selected === item ? 'active' : ''}`}
                onClick={() => setSelected(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="product__card__top__quick__btn" onClick={addToCart} ref={cartRef}>add to bag</div>
          <div className="product__card__top__quick__link">
            <Link to={props.path}>See Details</Link>
          </div>
        </div>
      </div>
      <div className="product__card__footer">
        <div className="product__card__footer__title">
          <div className="product__card__footer__title__designer">
            <Link to={props.pathDesigner}>{props.designer}</Link>
          </div>
          <div className="product__card__footer__title__product">
            <Link to={props.path}>{props.product}</Link>
          </div>
        </div>
        <div className="product__card__footer__price">
          <div className="product__card__footer__price__cost">
            ${Number(props.price)}.00
          </div>
          <div className="product__card__footer__price__sale">
            {props.sale !== null ? `$${Number(props.sale)}.00` : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
