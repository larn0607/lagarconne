import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartItemsSlice'

const ProductView = ({ product }) => {

  const dispatch = useDispatch()

  const cartRef = useRef()

  const [selected, setSelected] = useState(`${product.size[0]}`)

  const addToCart = () => {
    dispatch(addItem({
      productId: product.id,
      size: selected,
      quantity: 1,
      price: product.price
    }))
    cartRef.current.textContent = 'adding...'
    setTimeout(() => {
      cartRef.current.textContent = 'add to bag'
    }, 500)
  }

  return (
    <div className="product__view">
      <div className="product__view__images">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={product.images.length === 1 ? false : true}
          modules={[Navigation]}
          grabCursor={true}
          className="images-slider"
        >
          {product.images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="product__view__image__item">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product__view__info">
        <div className="product__view__info__top">
          <div className="product__view__info__top__title">
            <div className="product__view__info__top__title__designer">
              <Link to={`/collections/${product.designerSlug}`}>
                {product.designerName}
              </Link>
            </div>
            <div className="product__view__info__top__title__product">
              {product.productName}
            </div>
          </div>
          {product.sale === null ? (
            <div className="product__view__info__top__price">
              ${Number(product.price)}.00
            </div>
          ) : (
            <>
              <div className="product__view__info__top__sale">
                <span className="sale">${Number(product.sale)}.00</span>
                <span className="cost">${Number(product.price)}.00</span>
              </div>
            </>
          )}
        </div>
        <div className="product__view__info__btn">
          <Dropdown
            product={product}
            selected={selected}
            setSelected={setSelected}
          />
          <div className="product__view__info__btn__bag-add" onClick={addToCart} ref={cartRef}>
            <span>add to bag</span>
          </div>
        </div>
        <div
          className="product__view__info__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
    </div>
  )
}

export default ProductView
