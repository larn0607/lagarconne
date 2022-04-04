import { Link, useParams } from 'react-router-dom'
import Sorting from './Sorting'

const Category = ({ category, page, sort }) => {
  const { path, id } = useParams()
  
  return (
    <div className="category">
      <div></div>
      <ul className="category__menu">
        {category.map((item, index) => (
          <li key={index} className="category__menu__item" style={{color: `${item.display === 'sale' ? 'red' : ''}`}}>
            <Link to={item.path}>{item.display}</Link>
            <ul className="category__submenu">
              {item.subCate?.map((subItem, subIndex) => (
                <li key={subIndex} className="category__submenu__item">
                  <Link to={subItem.subPath}>{subItem.subDisplay}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {id === undefined && path !== undefined ? (
        <Sorting page={page} sort={sort}/>
      ) : null}
    </div>
  )
}

export default Category
