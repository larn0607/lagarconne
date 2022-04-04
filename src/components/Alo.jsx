import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartItemsSlice'

const Alo = ({ product }) => {

  const [current, setCurrent] = useState(0)
  console.log(current)
  const length = product.images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="slider">
      <i className='bx bx-chevron-left left' onClick={prevSlide}></i>
      <i className='bx bx-chevron-right right' onClick={nextSlide}></i>
      {product.images.map((image, index) => (
        <div key={index} className={index === current ? 'slide active' : 'slide'}>
          {index === current &&(

            <img src={image} alt="" className="image" />
          )}
        </div>
      ))}
    </div>
  )
} 

export default Alo