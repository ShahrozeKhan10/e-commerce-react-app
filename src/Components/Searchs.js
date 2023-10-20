import Search from './Search'
import { FaSearch} from 'react-icons/fa'
const Searchs = ({searchItems,onAddCart,onAddFav}) => {
  return (
    <div>
      <h1 className="text-center"><FaSearch />  Search</h1>
      <div className="productItems" >
        {searchItems.map((searchItem)=>(
            <Search  searchItem={searchItem} onAddCart={onAddCart} onAddFav={onAddFav}  />
          ))}
      </div>
    </div>
  )
}

export default Searchs
