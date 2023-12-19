import React,{ useContext ,createContext, useState} from "react";
// import './shopcontext.css'
import all_product from "../Components/Assests/all_product"
import "./shopcontext.css"

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index]=0;
    
  }
  return cart
}
const ShopContextProvider = (props) =>{
  const[cartItem,setCartItem]= useState(getDefaultCart);


   const addToCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItem);
   }
   const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount =()=>{
    let totalAmount=0;
    for (const item in cartItem) {
      if (cartItem[item]>0) {
        let itemInfo = all_product.find((product)=>product.id=== Number(item))
        totalAmount += itemInfo.new_price * cartItem[item];
      }
      return totalAmount;
    }
   }
   const contextValue = {getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart};
   const getTotalCartItems=()=>{
    let totalItem = 0;
    for(const item in cartItem){
      if (cartItem[item]>0) {
        totalItem+= cartItem[item]
      }
    }
   }
    return(
        <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
      </div>
    )
}
    
export default ShopContextProvider