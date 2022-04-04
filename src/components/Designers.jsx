import { Link } from 'react-router-dom'

const Designers = ({ designers }) => {
  return (
    <div className="designers">
      <div className="designers__title">all designers</div>
      <div className="designers__menu">
        {designers && designers.length > 0 && designers.map((designer, index) => (
          <div className="designers__menu__item" key={index}>
            <Link to={designer.path}>{designer.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Designers
