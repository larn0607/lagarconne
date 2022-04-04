import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'
import sliderData from '../data/sliderData'
import sectionData, { sectionData2, sectionData3 } from '../data/sectionData'
import Section, { SectionItem, SectionTitle } from '../components/Section'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
// import { useLocation } from 'react-router-dom'

const Home = () => {

  // const location = useLocation()
  // console.log(location)

  return (
    <Helmet title="A Unique Point of View in Luxury Fashion">
      <div className="container">
        <div className="navbar__hero-slider">
          <Sidebar />
          <HeroSlider data={sliderData} />
        </div>
        <Section>
          {sectionData.map((item, index) => (
            <SectionItem key={index}>
              <Link to={item.path}>
                <img src={item.img} alt="" />
              </Link>
              <SectionTitle>{item.title}</SectionTitle>
            </SectionItem>
          ))}
        </Section>
        <Section className="second">
          {sectionData2.map((item, index) => (
            <SectionItem key={index} className="second">
              <Link to={item.path}>
                <img src={item.img} alt="" />
              </Link>
              <SectionTitle>{item.title}</SectionTitle>
            </SectionItem>
          ))}
        </Section>
        <Section className="third">
          {sectionData3.map((item, index) => (
            <SectionItem key={index} className="third">
              <Link to={item.path}>
                <img src={item.img} alt="" />
              </Link>
              <SectionTitle>{item.title}</SectionTitle>
            </SectionItem>
          ))}
        </Section>
      </div>
    </Helmet>
  )
}

export default Home
