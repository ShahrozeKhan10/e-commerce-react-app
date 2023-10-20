import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

const Card = ({searchItem,onAddCart,onAddFav}) => {
    const [quan, setQunatity] = useState(1)
  
  return (
    <div className="products">
      <div className="items">
        <img src={searchItem.imgUrl} alt="Sorry" />
        <h3>{searchItem.product}</h3>
        <p>Price: ${searchItem.price}</p>
        <input className="quantity" type="number" defaultValue='1' min="1" id="quan" onChange={(e) => setQunatity(e.target.value)} />
        <div className="icons-div">
        <FaShoppingCart  className="cart-icon" onClick={() => onAddCart({id: searchItem.id, product: searchItem.product,price: searchItem.price,imgUrl: searchItem.imgUrl,quantity:quan,})} />
        <FaHeart  className="fav-icon" onClick={() => onAddFav({id: searchItem.id, searchItem: searchItem.product,price: searchItem.price,imgUrl: searchItem.imgUrl,})} />
        </div>
        
      </div>
      
    </div>
  )
}

export default Card
