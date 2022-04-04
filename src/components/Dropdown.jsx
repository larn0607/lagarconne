import { useState } from 'react'

const Dropdown = ({ product, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="select-dropdown">
      <div
        className="select-dropdown__btn"
        onClick={() => setIsActive(!isActive)}
      >
        {/* {product.size[0] === 'OS' ? <span>OS</span> : <span>{selected}</span>} */}
        {selected}
      </div>
      {isActive && (
        <div className="select-dropdown-list">
          {product.size.map((item, index) => (
            <div
              className={`select-dropdown-list__item${selected === item ? ' active' : ''}`}
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
