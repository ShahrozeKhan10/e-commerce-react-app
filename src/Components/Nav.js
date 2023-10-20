import { FaHeart} from 'react-icons/fa'
import { FaSearch} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Nav = ({clear, name,onSearching,onSearchItem}) => {

    let loginHide =[]
    let nameHide =[]
    if(name.length > 0){
        loginHide ={
            display: 'none'
        }
        nameHide ={
            display: 'block'
        }
    }
    else{
        loginHide ={
            display: 'block'
        }
        nameHide ={
            display: 'none'
        }
    }
    const backProcess = () => {
        clear('')
    }
    const [search, setSearchh] = useState('')
  return (
    <nav className="navbar">
        <div className="nav-items">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="NavLink" to="/">
                        <button className="nav-link login-button btn text-white">Products</button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="NavLink" to="/cart">
                        <button className="nav-link login-button btn text-white">Cart</button>
                    </NavLink>  
                </li>
                <li className="nav-item">
                    <NavLink className="NavLink" to="/contactUs">
                        <button className="nav-link login-button btn text-white">Contact Us</button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="NavLink" to="/favourite">
                        <button className="nav-link login-button btn text-white" ><FaHeart/></button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <form >
                        <input type="text" onFocus={()=>onSearching()} value={search} onChange={(e) => setSearchh(e.target.value)} />
                        <NavLink to="/search">
                            <button className=" searchBtn " onClick={() => onSearchItem(search)}><FaSearch/></button>
                            {/* <input type="submit" className=" searchBtn " value={<FaSearch/>} onClick={() => onSearchItem(search)}  /> */}
                        </NavLink>   
                    </form>
                    
                </li>
            </ul>
        </div>
        <div clas="nav-account">
           
            <ul className="navbar-nav">
                <li className="nav-item" style={nameHide}>
                    <button className="nav-link login-button btn text-white">{name}</button>
                </li>
                <li className="nav-item" style={nameHide}>
                    <button className="nav-link login-button btn text-white" onClick={backProcess}>Logout</button>
                </li>
                <li className="nav-item">
                    <NavLink className="NavLink" to="/login">
                        <button style={loginHide} className="nav-link login-button btn text-white" >Login</button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="NavLink" to="/createAnAccount">
                        <button style={loginHide} className="nav-link login-button btn text-white" >Create an Account</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
