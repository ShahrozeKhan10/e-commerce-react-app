import ContactUs from './Components/ContactUs'
import Search from './Components/Searchs'
import Fav from './Components/Favs'
import Tasks from './Components/Tasks'
import Cards from './Components/Cards'
import Login from './Components/Login'
import Nav from './Components/Nav'
import CreateAccount from './Components/CreateAccount'
import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'


function App() {

    const [cards, setCard] = useState([]);
    const [favs, setFav] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchItems, setSearches] = useState([]);
    let totalPrice=0;
    cards.forEach((card) => {
         let totalQuan = card.quantity*card.price
        totalPrice= totalPrice+totalQuan
    })
  const [tasks] = useState([
    {
        id: 1,
        product: 'Watch',
        price: 59,
        imgUrl: require('./images/watch.jpeg'),
    },
    {
        id: 2,
        product: 'Mobile',
        price: 120,
        imgUrl: require('./images/mobile.jpg')
    },
    {
        id: 3,
        product: 'Laptop',
        price: 279,
        imgUrl: require('./images/laptop.jpg')
    },
    {
        id: 4,
        product: 'Watch',
        price: 59,
        imgUrl: require('./images/watch.jpeg')
    },
    {
        id: 5,
        product: 'Mobile',
        price: 120,
        imgUrl: require('./images/mobile.jpg')
    },
    {
        id: 6,
        product: 'Laptop',
        price: 279,
        imgUrl: require('./images/laptop.jpg')
    },
    {
        id: 7,
        product: 'Watch',
        price: 59,
        imgUrl: require('./images/watch.jpeg')
    },
    {
        id: 8,
        product: 'Mobile',
        price: 120,
        imgUrl: require('./images/mobile.jpg')
    },
    {
        id: 9,
        product: 'Laptop',
        price: 279,
        imgUrl: require('./images/laptop.jpg')
    },
    {
        id: 10,
        product: 'Watch',
        price: 59,
        imgUrl: require('./images/watch.jpeg')
    },
    {
        id: 11,
        product: 'Mobile',
        price: 120,
        imgUrl: require('./images/mobile.jpg')
    },
    {
        id: 12,
        product: 'Laptop',
        price: 279,
        imgUrl: require('./images/laptop.jpg')
    },
    {
        id: 13,
        product: 'Watch',
        price: 59,
        imgUrl: require('./images/watch.jpeg')
    },
    {
        id: 14,
        product: 'Mobile',
        price: 120,
        imgUrl: require('./images/mobile.jpg')
    },
    {
        id: 15,
        product: 'Laptop',
        price: 279,
        imgUrl: require('./images/laptop.jpg')
    },
  
  ])

  // Add cart
  const addCartProduct = (task) => {
    console.log(task);
    const Ranid = Math.floor(Math.random()*10000) +1
    const newTask = { Ranid, ...task}
    setCard([...cards, newTask])
    console.log(newTask)
  }
  const addSearch = () => {
    setSearches([...tasks])
  }
  console.log(searchItems)

  // Add Favorite 
  const addFavProduct = (task) => {
    const Ranid = Math.floor(Math.random()*10000) +1
    const newTask = { Ranid, ...task}
    setFav([...favs, newTask])
    console.log(newTask)
  }


  // Add user Login
  const addUserAcc = (task) => {
    console.log(task)
    const newTask = {...task}
    setUsers([...users, newTask])
    console.log("Create an Account Store in App " + users);
  }
  
  // Delete Cart
  const deleteCart = (Ranid) => {
    setCard(cards.filter((card) => card.Ranid !== Ranid))
  }

  // Delete Fav
  const deleteFav= (Ranid) => {
    setFav(favs.filter((fav) => fav.Ranid !== Ranid))
  }

  const [userLogin, setUserLogin] = useState('')
  // addLoginUser
  const addLoginUser = (userName) => {
    setUserLogin(userName.toUpperCase())
    console.log("Store in App " + userLogin)
  }


  let imag1= require('./images/sliderWatch.jpg')
  let imag2= require('./images/sliderLaptop.jpg')
  let imag3= require('./images/sliderMobile.jpg')

  const setSearchIetms = (itemName) =>{
    setSearches(searchItems.filter((ProductName) => ProductName.product === itemName))
  }
  
  return (
    <div className="container">
      <BrowserRouter>
      <Nav clear={()=>setUserLogin('')} name={userLogin} onSearching={addSearch} onSearchItem={setSearchIetms} />
      <Routes>
        <Route path="/" element={<Tasks imag1={imag1} imag2={imag2} imag3={imag3} tasks={tasks}  onAddCart={addCartProduct} onAddFav={addFavProduct} />} />
        <Route path="/cart" element={<Cards totalPrice={totalPrice} cards={cards} onDelete={deleteCart} />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/favourite" element={<Fav favs={favs} onDelete={deleteFav} />} />
        <Route path="/login" element={<Login users={users} onAdd={addLoginUser}  />} />
        <Route path="/createAnAccount" element={<CreateAccount onUserAdd={addLoginUser} onAdd={addUserAcc} />} />
        <Route path="/search" element={<Search searchItems={searchItems}  onAddCart={addCartProduct} onAddFav={addFavProduct}  />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
