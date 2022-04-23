import { useState, useEffect, useRef } from 'react'

const Dropdown = ({ product, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = e => {
      if(isActive && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isActive, dropdownRef])

  return (
    <div className="select-dropdown">
      <div
        className="select-dropdown__btn"
        onClick={() => setIsActive(!isActive)}
        ref={dropdownRef}
      >
        {/* {product.size[0] === 'OS' ? <span>OS</span> : <span>{selected}</span>} */}
        {selected}
      </div>
      {isActive && (
        <div className="select-dropdown-list">
          {product.size.map((item, index) => (
            <div
              className={`select-dropdown-list__item${
                selected === item ? ' active' : ''
              }`}
              key={index}
              onClick={e => {
                setSelected(e.target.textContent)
                setIsActive(false)
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
