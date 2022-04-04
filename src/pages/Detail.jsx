import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Productdata from '../data/Productdata'
import ProductView from '../components/ProductView'
import Helmet from '../components/Helmet'

const Detail = () => {
  const { path, id } = useParams()
  const product = Productdata.findProductById(id)

  const relatedProducts = Productdata.getProducts(path, 4)

  return (
    <Helmet title={product.productName}>
      <div className="detail">
        <ProductView product={product} />
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="related__product">
            <div className="related__product__title">you may also like</div>
            <div className="related__product__item">
              {relatedProducts.map(product => (
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
          </div>
        )}
      </div>
    </Helmet>
  )
}

export default Detail
