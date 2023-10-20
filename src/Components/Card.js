import { FaTimes} from 'react-icons/fa'

const Card = ({card, onDelete}) => {
  
  return (
    <div className="products">
      <div className="items">
        <img src={card.imgUrl} alt="Sorry" />
        <h3>{card.product}</h3>
        <p>Price: ${card.price}</p>
        <input className="quantity" type="number" defaultValue={card.quantity} id="quan" />
        <FaTimes style={{color: 'red', cursor: 'pointer', }} onClick={() => onDelete(card.Ranid)} />
      </div>
      
    </div>
  )
}

export default Card
