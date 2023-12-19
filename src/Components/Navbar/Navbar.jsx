import React, {  useState } from "react";
import './Navbar.css'
import logo from '../Assests/logo.png'
import cartIcon from  '../Assests/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar=()=>{
    const[menu,setMenu]=useState("shop");
  
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""></img>
                <p>POSHPALETTE</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}} ><Link to='/' style={{textDeceration:'none'}}>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('men')}}><Link style={{textDeceration:'none'}} to='/mens'>Men</Link> {menu==='men'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('women')}} > <Link style={{textDeceration:'none'}} to='womens'>Women</Link> {menu==='women'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('kid')}}><Link style={{ textDeceration:'none' }} to='kids'>Kids</Link> {menu==='kid'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/login'><button>Login</button></Link>
               <Link to='/cart'><img src={cartIcon} alt=""/></Link> 
                <div className="nav-cart-count">{0}</div>
            </div>
        </div>
    )
}
export default Navbar