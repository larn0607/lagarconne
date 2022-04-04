import { useNavigate } from 'react-router-dom'

const Sorting = ({ page, sort }) => {

  const navigate = useNavigate()

  const handleSort = e => {
    const { value } = e.target
    navigate(`?page=${page}&sort_by=${value}`)
  }

  return (
    <div className="sorting">
      <select value={sort} onChange={handleSort}>
        <option value="newest" style={{ display: `${sort === 'newest' ? 'none' : 'block'}`}}>Newest</option>
        <option value="price-ascending" style={{ display: `${sort === 'price-ascending' ? 'none' : 'block'}`}}>$Low to High</option>
        <option value="price-descending" style={{ display: `${sort === 'price-descending' ? 'none' : 'block'}`}}>$High to Low</option>

      </select>
    </div>
  )
}

export default Sorting