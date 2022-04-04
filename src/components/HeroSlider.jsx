import { Link } from 'react-router-dom'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const HeroSlider = ({ data }) => {
  SwiperCore.use([Autoplay])

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        className="images-slider"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSliderItem item={item} />
          </SwiperSlide >
        ))}
      </Swiper>
    </div>
  )
}

const HeroSliderItem = props => (
  <div className={`hero-slider__item`}>
    <div className="hero-slider__item__image">
      <Link to={props.item.path}>
        <img src={props.item.img} alt="" />
      </Link>
    </div>
    <div className="hero-slider__item__title">{props.item.title}</div>
  </div>
)

export default HeroSlider
