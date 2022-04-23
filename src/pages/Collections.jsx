import React, { useRef, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../components/Category'
import Designers from '../components/Designers'
import categoriesData from '../data/categoriesData'
import designersData from '../data/designersData'
import Helmet from '../components/Helmet'
import { Link, useParams, useLocation } from 'react-router-dom'
import Sorting from '../components/Sorting'

const Collections = () => {
  const { id } = useParams()
  const { search } = useLocation()
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('')

  const categoriesRef = useRef()
  const categoriesContainerRef = useRef()
  const designersRef = useRef()
  const designersContainerRef = useRef()

  const handleToggleDesigners = () => {
    designersRef.current.classList.toggle('active')
    designersContainerRef.current.classList.toggle('active')
  }
  const handleToggleCategories = () => {
    categoriesRef.current.classList.toggle('active')
    categoriesContainerRef.current.classList.toggle('active')
  }

  useEffect(() => {
    const page = new URLSearchParams(search).get('page') || 1
    const sort = new URLSearchParams(search).get('sort_by') || 'newest'
    setPage(Number(page))
    setSort(sort)
  }, [search])

  useEffect(() => {
    const handlePressEscape = e => {
      if (
        designersContainerRef.current.classList.contains('active') &&
        e.keyCode === 27
      ) {
        designersRef.current.classList.toggle('active')
        designersContainerRef.current.classList.toggle('active')
      }
      if (
        categoriesContainerRef.current.classList.contains('active') &&
        e.keyCode === 27
      ) {
        categoriesRef.current.classList.toggle('active')
        categoriesContainerRef.current.classList.toggle('active')
      }
    }
    document.addEventListener('keydown', handlePressEscape)

    return () => {
      document.removeEventListener('keydown', handlePressEscape)
    }
  }, [designersContainerRef, categoriesContainerRef])

  return (
    <Helmet title="Collections">
      <div className="container">
        {id === undefined ? (
          <div className="subnav__mobile">
            <div
              className="subnav__mobile__item"
              onClick={handleToggleCategories}
            >
              Categories
            </div>
            <div className="subnav__mobile__item">
              <Sorting page={page} sort={sort} />
            </div>
            <div
              className="subnav__mobile__item"
              onClick={handleToggleDesigners}
            >
              Designers
            </div>
          </div>
        ) : null}
        <div className="subnav__mobile__container" ref={designersContainerRef}>
          <div
            className="subnav__mobile__container__designers"
            ref={designersRef}
          >
            <div className="subnav__mobile__container__designers__title">
              Brand list
            </div>
            {designersData &&
              designersData.listDesigner().map((designer, index) => (
                <div
                  className="subnav__mobile__container__designers__item"
                  key={index}
                  onClick={handleToggleDesigners}
                >
                  <Link to={designer.path}>{designer.name}</Link>
                </div>
              ))}
            <div
              className="subnav__mobile__close"
              onClick={handleToggleDesigners}
            >
              <i className="bx bx-x"></i>
            </div>
          </div>
        </div>
        <div className="subnav__mobile__container" ref={categoriesContainerRef}>
          <div
            className="subnav__mobile__container__categories"
            ref={categoriesRef}
          >
            <div className="subnav__mobile__container__categories__title">
              all categories
            </div>
            <hr />
            <ul>
              {categoriesData.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    <Link to={item.path} onClick={handleToggleCategories}>
                      {item.display}
                    </Link>
                    <ul>
                      {item.subCate?.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.subPath}
                            onClick={handleToggleCategories}
                          >
                            {subItem.subDisplay}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <hr />
                </React.Fragment>
              ))}
            </ul>
            <div
              className="subnav__mobile__close"
              onClick={handleToggleCategories}
            >
              <i className="bx bx-x"></i>
            </div>
          </div>
        </div>
        <div className="collection__category">
          <Category category={categoriesData} page={page} sort={sort} />
        </div>
        <div className="collection__content">
          <div className="collection__content__designers">
            <Designers designers={designersData.listDesigner()} />
          </div>
          <div className="collection__content__main">
            <Outlet />
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Collections
