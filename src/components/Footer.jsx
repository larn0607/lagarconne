import footerData from '../data/footerData'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <div className="footer__menu">
      {footerData.map((item, index) => (
        <FooterItem key={index} item={item} />
      ))}
    </div>
    <div className="footer__social">
      <i className="bx bxl-facebook"></i>
      <i className="bx bxl-instagram"></i>
      <i className="bx bxl-tumblr"></i>
      <i className="bx bxl-pinterest-alt"></i>
      <i className="bx bxl-twitter"></i>
    </div>
  </div>
)

const FooterItem = props => (
  <div className="footer__menu__item">
    <Link to={props.item.path}>{props.item.title}</Link>
  </div>
)

export default Footer
