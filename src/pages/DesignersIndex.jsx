import designersData from '../data/designersData'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'

const DesignersIndex = () => {
  const designer = designersData.listDesignerByName
  return (
    <Helmet title="Designer Index">
    <div className="designers__index__title">brand list</div>
    <div className="designers__index">
      {designer.map((item, index) => (
        <div className="designers__index__list" key={index}>
          <p>&nbsp;</p>
          {item.map((item1, index1) => (
            <div className="designers__index__list__item" key={index1}>
              <Link to={item1.path}>{item1.name}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
    </Helmet>
  )
}

export default DesignersIndex
