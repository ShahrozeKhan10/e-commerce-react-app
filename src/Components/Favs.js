import Fav from './Fav'
import { FaShoppingCart} from 'react-icons/fa'

const Favs = ({favs, onDelete}) => {
    let styles=[{display: 'none'}];
    if(favs.length <= 0){
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
      <h1 className="text-center"><FaShoppingCart />Favorite</h1>
      <div className="productItems">
      <h1 className="text-center" style={styles}>Favorite is Empty</h1>
        {favs.map((fav)=>(
            <Fav  fav={fav} onDelete={onDelete} />
          ))}
      </div>
       
    </div>
  )
}

export default Favs
