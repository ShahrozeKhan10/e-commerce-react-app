import { FaShoppingCart} from 'react-icons/fa'
import { FaHeart} from 'react-icons/fa'
import { useState } from 'react'

const Task = ({task, onAddCart,onAddFav}) => {

  const [quan, setQunatity] = useState(1)

  return (
    <div className='products' >
      <div className="items ">
        <img src={task.imgUrl} alt={task.imgUrl} />
        <h3 className="text-center">{task.product}</h3>
        <p className="text-center">Price: ${task.price}</p>
        <input className="quantity" type="number" defaultValue='1' min="1" id="quan" onChange={(e) => setQunatity(e.target.value)} />
        <div className="task-add-fav">
        <FaShoppingCart  className="cart-icon" onClick={() => onAddCart({id: task.id, product: task.product,price: task.price,imgUrl: task.imgUrl,quantity:quan,})} />
        <FaHeart  className="fav-icon" onClick={() => onAddFav({id: task.id, product: task.product,price: task.price,imgUrl: task.imgUrl,})} />
        </div>
        
      </div>
    </div>
  )
}

export default Task
