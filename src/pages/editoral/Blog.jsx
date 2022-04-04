import { useParams } from 'react-router-dom'
import editoralData from '../../data/editoralData'
import Helmet from '../../components/Helmet'

const Blog = () => {
  const { blog } = useParams()

  const blogs = editoralData.find(x => x.slug === blog)

  return (
    <Helmet title={blogs.title}>
      <div className="blog">
        <div className="blog__top">
          <div className="blog__top__info">
            <h1 className="blog__top__info__title">{blogs.info.name}</h1>
            <div className="blog__top__info__photography">
              Photography: {blogs.info.photography}
            </div>
            <div className="blog__top__info__model">
              Model: {blogs.info.model}
            </div>
          </div>
          <div className="blog__top__right">
            <div className="blog__top__right__image">
              <img src={blogs.info.thumb} alt="" />
            </div>
            <div className="blog__top__right__des">{blogs.info.title}</div>
          </div>
        </div>
        <div className="blog__main">
          <BlogSection items={blogs?.item} />
          <BlogLandScape items={blogs?.landscape1} />
          <BlogSection items={blogs?.item2} />
          <BlogLandScape items={blogs?.landscape2} />
          <BlogSection items={blogs?.item3} />
          <BlogLandScape items={blogs?.landscape3} />
          <BlogSection items={blogs?.item4} />
          <BlogLandScape items={blogs?.landscape4} />
          {blogs.item5 ? (
          <BlogSection items={blogs?.item5} />
          ) : null}
          {blogs.landscape5 ? (
            <BlogLandScape items={blogs?.landscape5} />
          ) : null}
        </div>
      </div>
    </Helmet>
  )
}

const BlogSection = ({ items }) => (
  <div className="blog__main__section">
    {items?.map((item, index) => (
      <div className="blog__main__section__item" key={index}>
        <div className="blog__main__section__item__image">
          <img src={item.img} alt="" />
        </div>
        <div className="blog__main__section__item__des">
          {`${item.title1}${item.title2 ? ` ${item.title2}` : ''} ${
            item.title3 ? ` ${item.title3}` : ''
          } ${item.title4 ? ` ${item.title4}` : ''} ${
            item.title5 ? ` ${item.title5}` : ''
          }`}
        </div>
      </div>
    ))}
  </div>
)

const BlogLandScape = ({ items }) => (
  <div className="blog__main__landscape">
      <div className="blog__main__landscape__item">
        <div className="blog__main__landscape__item__image">
        <img src={items.img} alt="" />
        </div>
        <div className="blog__main__landscape__item__des">
          {`${items.title1}${items.title2 ? ` ${items.title2}` : ''} ${
            items.title3 ? ` ${items.title3}` : ''
          } ${items.title4 ? ` ${items.title4}` : ''} ${
            items.title5 ? ` ${items.title5}` : ''
          }`}
        </div>
      </div>
  </div>
)

export default Blog
