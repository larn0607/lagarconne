import { Link, Outlet, useParams } from 'react-router-dom'
import editoralData from '../../data/editoralData'
import Helmet from '../../components/Helmet'

const Editoral = () => {
  const {blog} = useParams()
  
  return (
    <Helmet title="Editoral">
      {blog === undefined ? (
        <div className="editoral">
          <div className="editoral__item">
            {editoralData.map((item, index) => (
              <EditoralItem item={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </Helmet >
  )
}

const EditoralItem = ({ item }) => {
  return (
    <>
      <div className="editoral__item__title">
        <Link to={`/editoral/${item.slug}`}>{item.title}</Link>
      </div>
      <div className="editoral__item__image">
        <Link to={`/editoral/${item.slug}`}>
          <img src={item.img} alt="" />
        </Link>
      </div>
    </>
  )
}

export default Editoral
