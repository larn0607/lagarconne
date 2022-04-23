import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartItemsSlice'
import Modal, { ModalContent } from './Modal'

const ProductView = ({ product }) => {
  const dispatch = useDispatch()

  const cartRef = useRef()

  const modalRef = useRef(null)

  console.log(modalRef.current)

  const [selected, setSelected] = useState(`${product.size[0]}`)
  const [activeModal, setActiveModal] = useState(false)

  useEffect(() => {
    const clickOutside = e => {
      if (
        activeModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setActiveModal(false)
      }
    }

    document.addEventListener('click', clickOutside)

    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [activeModal])

  const addToCart = () => {
    dispatch(
      addItem({
        productId: product.id,
        size: selected,
        quantity: 1,
        price: product.price
      })
    )
    cartRef.current.textContent = 'adding...'
    setTimeout(() => {
      cartRef.current.textContent = 'add to bag'
    }, 500)
  }

  const setModalActive = () => {
    setActiveModal(true)
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
          <div
            className="product__view__info__btn__bag-add active"
            onClick={addToCart}
            ref={cartRef}
          >
            <span>add to bag</span>
          </div>
        </div>
        <div
          className="product__view__info__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product__view__info__size" onClick={setModalActive}>
          Size chart
        </div>
      </div>
      <SizeModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        modalRef={modalRef}
      />
    </div>
  )
}

const SizeModal = ({ activeModal, setActiveModal, modalRef }) => {
  return (
    <Modal active={activeModal}>
      <ModalContent setActive={setActiveModal} modalRef={modalRef}>
        <div className="modal__size">
          <div className="modal__size__content">
            <p>Clothing Sizes</p>
            <div className="modal__size__content__table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>XS</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>US</td>
                    <td>0</td>
                    <td>2/4</td>
                    <td>4/6</td>
                    <td>8/10</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td>38</td>
                    <td>40</td>
                    <td>42</td>
                    <td>44</td>
                  </tr>
                  <tr>
                    <td>France</td>
                    <td>34</td>
                    <td>36</td>
                    <td>38</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>UK</td>
                    <td>6</td>
                    <td>8</td>
                    <td>10</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Japan</td>
                    <td>5</td>
                    <td>7</td>
                    <td>9</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Germany</td>
                    <td>32</td>
                    <td>34</td>
                    <td>36</td>
                    <td>38</td>
                  </tr>
                  <tr>
                    <td>Australia</td>
                    <td>8</td>
                    <td>10</td>
                    <td>12</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>Denim</td>
                    <td>24-25</td>
                    <td>26-27</td>
                    <td>27-28</td>
                    <td>29-30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Shoes Sizes</p>
            <div className="modal__size__content__table">
              <table>
                <tbody>
                  <tr>
                    <td>US</td>
                    <td>5</td>
                    <td>5.5</td>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                    <td>7.5</td>
                    <td>8</td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>UK</td>
                    <td>2</td>
                    <td>2.5</td>
                    <td>3</td>
                    <td>3.5</td>
                    <td>4</td>
                    <td>4.5</td>
                    <td>5</td>
                    <td>5.5</td>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td>35</td>
                    <td>35.5</td>
                    <td>36</td>
                    <td>36.5</td>
                    <td>37</td>
                    <td>37.5</td>
                    <td>38</td>
                    <td>38.5</td>
                    <td>39</td>
                    <td>39.5</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>France</td>
                    <td>36</td>
                    <td>36.5</td>
                    <td>37</td>
                    <td>37.5</td>
                    <td>38</td>
                    <td>38.5</td>
                    <td>39</td>
                    <td>39.5</td>
                    <td>40</td>
                    <td>40.5</td>
                    <td>41</td>
                  </tr>
                  <tr>
                    <td>Japan</td>
                    <td>21.5</td>
                    <td>22</td>
                    <td>22.5</td>
                    <td>23</td>
                    <td>23.5</td>
                    <td>24</td>
                    <td>24.5</td>
                    <td>25</td>
                    <td>25.5</td>
                    <td>26</td>
                    <td>26.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For designer specific sizing information, please refer to the
              individual product pages under 'Size &amp; Fit' for further
              details.
            </p>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default ProductView
