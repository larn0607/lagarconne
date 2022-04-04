const Helmet = props => {
  document.title = 'La Garçonne | ' + props.title

  return (
    <>
      {props.children}
    </>
  )
}

export default Helmet