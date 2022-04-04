import { useEffect, useMemo, useState } from 'react'
import Productdata from '../data/Productdata'
import designersData from '../data/designersData'
import { useParams, useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Helmet from '../components/Helmet'
import Pagination from '../components/Pagination'
// import Sorting from '../components/Sorting'

const Catalog = () => {
  const { path } = useParams()
  const [products, setProducts] = useState([])
  const [designers, setDesigners] = useState([])
  const productPerPage = 16
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('')

  const { search } = useLocation()

  useEffect(() => {
    const getProduct = async () => {
      let listProduct = null
      let listDesigners = null
      const page = new URLSearchParams(search).get('page') || 1
      const sort = new URLSearchParams(search).get('sort_by') || 'newest'
      if (path === 'new-arrivals' || path === 'all') {
        listProduct = await Productdata.getAllProduct()
      } else {
        listProduct = await Productdata.getProductByCondition(path)
        listDesigners = await designersData.findDesigner(path)
      }
      switch (sort) {
        case 'newest':
          listProduct.sort((a, b) => a.id - b.id)
          break
        case 'price-ascending':
          listProduct.sort((a, b) => a.price - b.price)
          break
        case 'price-descending':
          listProduct.sort((a, b) => b.price - a.price)
          break
        default:
          return listProduct
      }

      setProducts(listProduct)
      setDesigners(listDesigners)

      setPage(Number(page))
      setSort(sort)
    }
    getProduct()
  }, [path, sort, search])

  const indexOfLastProduct = page * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const totalPages = useMemo(() => {
    return Math.ceil(products.length / productPerPage)
  }, [products.length, productPerPage])

  return (
    <Helmet title="Product">
      <div className="catalog">
        {/* <Sorting sort={sort} page={page} /> */}
        {designers ? (
          <div className="designer">
            <div className="designer__title">{designers.name}</div>
            <div className="designer__des">{designers.description}</div>
          </div>
        ) : null}
        <div className="product">
          {currentProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              path={`/collections/${path}/${product.id}`}
              pathDesigner={`/collections/${product.designerSlug}`}
              img={product.images[0]}
              designer={product.designerName}
              product={product.productName}
              price={product.price}
              sale={product.sale}
              size={product.size}
            />
          ))}
        </div>
        {totalPages <= 1 ? null : (
          <Pagination totalPages={totalPages} page={page} sort={sort} />
        )}
      </div>
    </Helmet>
  )
}

export default Catalog
