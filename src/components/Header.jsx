import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/lagarconne-logo.png'
import menuData from '../data/menuData'
import { useSelector } from 'react-redux'
import bag from '../assets/ico_cart.png'

const Header = () => {
  const menuContainerRef = useRef(null)
  const menuRef = useRef(null)

  const cartItems = useSelector(state => state.cartItems.value)

  const handleToggleMenu = () => {
    menuRef.current.classList.toggle('active')
    menuContainerRef.current.classList.toggle('active')
  }

  const HeaderNav = [
    {
      display: 'Designer Index',
      path: '/designers'
    },
    {
      display: 'New Arrivals',
      path: '/collections/new-arrivals'
    },
    {
      display: 'Editoral',
      path: '/editoral'
    }
  ]

  const countProducts = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__menu">
        <div className="header__menu__mobile-toggle" onClick={handleToggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
        <div className="header__menu__left">
          {HeaderNav.map((item, index) => (
            <div
              className="header__menu__item header__menu__left__item"
              key={index}
            >
              <Link to={item.path}>
                <span>{item.display}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="header__menu__right">
          <div className="header__menu__item header__menu__right__item">
            <i className="bx bx-search"></i>
          </div>
          <div className="header__menu__item header__menu__right__item">
            <Link to="/cart">
              <span>
                my bag
                {
                cartItems.length > 0 ? ` (${countProducts})` : ''
                }
              </span>
              <div>
                <img src={bag} alt="" />
                {
                  cartItems.length > 0 ? ` ${countProducts}` : ''
                }

              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu__mobile__container" ref={menuContainerRef}>
        <div className="menu__mobile" ref={menuRef}>

        {menuData.map((item, index) => (
          <div className="menu__mobile__item" key={index} onClick={handleToggleMenu}>
            <Link to={item.path}>
              {item.display}
            </Link>
          </div>
        ))}
        <div className="menu__mobile__close" onClick={handleToggleMenu}>
          <i className="bx bx-x"></i>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
