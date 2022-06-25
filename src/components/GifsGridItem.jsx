export const GifsGridItem = ({id, title, url}) => {
  return (
    <div className="card">
      <img src={url} title={ title } />
      <p>{title}</p>
    </div>
  )
}
