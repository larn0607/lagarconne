import { Link } from 'react-router-dom'

const Sidebar = () => {

  const SideItems = [
    {
      display: 'new arrivals',
      path: '/collections/new-arrivals'
    },
    {
      display: 'clothing',
      path: '/collections/clothing'
    },
    {
      display: 'handbags',
      path: '/collections/handbags'
    },
    {
      display: 'jewelry',
      path: '/collections/jewelry'
    },
    {
      display: 'shoes',
      path: '/collections/shoes'
    },
    {
      display: 'accessories',
      path: '/collections/accessories'
    },
    {
      display: 'sale',
      path: '/collections/sale'
    }
  ]

  return (
    <div className="sidebar">
      <ul>
        {SideItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              {item.display}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar