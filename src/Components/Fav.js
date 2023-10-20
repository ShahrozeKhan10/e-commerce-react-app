import { FaTimes} from 'react-icons/fa'

const Fav = ({fav, onDelete}) => {
  return (
    <div className="products">
      <div className="items">
        <img src={fav.imgUrl} alt="Sorry" />
        <h3>{fav.product}</h3>
        <p>Price: ${fav.price}</p>
        <FaTimes style={{color: 'red', cursor: 'pointer', }} onClick={() => onDelete(fav.Ranid)} />
      </div>
      
    </div>
  )
}

export default Fav
