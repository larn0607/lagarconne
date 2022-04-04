const Section = props => (
  <div className={`section${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </div>
)

export const SectionTitle = props => (
  <div className="section__title">
    {props.children}
  </div>
)
export const SectionItem = props => (
  <div className={`section__item${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </div>
)

export default Section