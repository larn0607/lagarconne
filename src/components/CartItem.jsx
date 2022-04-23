import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/cart/cartItemsSlice'

const CartItem = props => {
  const dispatch = useDispatch()

  const [item, setItem] = useState(props.item)
  const [quantity, setQuantity] = useState(props.quantity)

  useEffect(() => {
    setItem(props.item)
    setQuantity(props.item.quantity)
  }, [props.item])

  const updateQuantity = opt => {
    if(opt === 'plus') {
      dispatch(updateItem({...item, quantity: quantity + 1}))
    }
    if(opt === 'minus')
    {
      dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
    }
  }

  const removeQuantity = () => {
    dispatch(removeItem(item))
  }

  return (
    <tr className="cart__info__table__item" key={item.id}>
      <td className="cart__info__table__item__product">
        <div className="cart__info__table__item__product__delete" onClick={removeQuantity}>
          &#x2715;
        </div>
        <div className="cart__info__table__item__product__image">
          <img src={item.product.images[0]} alt="" />
        </div>
        <div className="cart__info__table__item__product__info">
          <div className="cart__info__table__item__product__info__vendor">
            {item.product.designerName}
          </div>
          <div className="cart__info__table__item__product__title">
            {item.product.productName}
          </div>
          <p>Size: {item.size}</p>
        </div>
      </td>
      <td className="cart__info__table__item__price">${item.price}.00</td>
      <td className="cart__info__table__item__quantity">
        <span className="cart__info__table__item__quantity__input">
          {quantity}
        </span>
        <span className="cart__info__table__item__quantity__btn" onClick={() => updateQuantity('minus')}>
          <i className="bx bx-minus"></i>
        </span>
        <span className="cart__info__table__item__quantity__btn" onClick={() =>updateQuantity('plus')}>
          <i className="bx bx-plus"></i>
        </span>
      </td>
      <td className="cart__info__table__item__total">
        ${item.price * quantity}.00
      </td>
    </tr>
  )
}

export default CartItem
