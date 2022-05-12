import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pagination = ({ totalPages, page, sort }) => {
  const navigate = useNavigate()
  const [firstArr, setFirstArr] = useState([])
  const [lastArr, setLastArr] = useState([])

  useEffect(() => {
    const newArr = [...Array(totalPages)].map((_, i) => i + 1)
    if(newArr.length < 7) {
      return newArr
    }
    if(totalPages - page >= 7) {
      setFirstArr(newArr.slice(page - 1, page + 5))
      setLastArr(newArr.slice(totalPages - 2))
    }
    else {
      setFirstArr(newArr.slice(totalPages - 7))
      setLastArr([])
    }

  }, [totalPages, page])
  

  const isActive = index => {
    if (index === page) return 'active'
    return ''
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const prev = () => {
    const newPage = Math.max(page - 1, 1)
    console.log(newPage)
    navigate(`?page=${newPage}&sort_by=${sort}`)
  }
  const next = () => {
    const newPage = Math.min(page + 1, totalPages)
    console.log(newPage, totalPages)
    navigate(`?page=${newPage}&sort_by=${sort}`)
  }
  const jump = num => {
    navigate(`?page=${num}&sort_by=${sort}`)
  }

  return (
    <div className="pagination">
      {page !== 1 ? (
        <span className="prev" onClick={prev}>
          Previous
        </span>
      ) : null}
      {firstArr.map(num => (
        <span
          key={num}
          className={`${isActive(num)}`}
          onClick={() => jump(num)}
        >
          {num}
        </span>
      ))}
      {lastArr.length > 0 &&<span className="dot">...</span>}
      {lastArr.map(num => (
        <span
          key={num}
          className={`${isActive(num)}`}
          onClick={() => jump(num)}
        >
          {num}
        </span>
      ))}
      {page === totalPages ? null : (
        <span className="next" onClick={next}>
          Next
        </span>
      )}
    </div>
  )
}

export default Pagination
