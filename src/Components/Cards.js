import Card from './Card'
import { FaShoppingCart} from 'react-icons/fa'

const Cards = ({cards, onDelete,totalPrice}) => {
  let styles=[{display: 'none'}];
  
  if(cards.length <= 0){
    styles ={
      display: 'inline'
    }
  }
  else{
    styles ={
      display: 'none'
    }
  }

  return (
    <div className="productSection">
      <h1 className="text-center"><FaShoppingCart />  Cart</h1>
      <h2 className="text-center">Total Price: {totalPrice}</h2>
      <div className="productItems" >
      <h1 className="text-center" style={styles}>Cart is Empty</h1>
        {cards.map((card)=>(
            <Card  card={card} onDelete={onDelete} />
          ))}
      </div>
       
    </div>
  )
}

export default Cards
