import './index.css'

const DestinationItem = props => {
  const {eachItem, key} = props
  const {name, imgUrl} = eachItem
  console.log(imgUrl)
  return (
    <li className="card" id={key}>
      <img src={imgUrl} alt={name} className="card-image" />
      <p className="card-heading">{name}</p>
    </li>
  )
}

export default DestinationItem
