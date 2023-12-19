import React, { useContext } from "react";
import './cartitem.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assests/cart_cross_icon.png"
const CartItem=()=>{
    const {getTotalCartAmount,all_product,cartItem,removeFromCart}=useContext(ShopContext);
    return(
        <div className="cartitem">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            <div>
                {all_product.map((i)=>{
                    if (cartItem[i.id]>0) {
                        return <div className="cartitem-format cartitem-format-main">
                        <img src={i.image} className="carticon-producticon"/>
                        <p>{i.name}</p>
                        <p>${i.new_price}</p>
                        <button className="cartitem-quantity">{cartItem[i.id]}</button>
                        <p>${i.new_price*cartItem[i.id]}</p>
                        <img className="carticon-remove" src = {remove_icon}onClick={()=>{removeFromCart(i.id)}}/>
                        <hr/>
                    </div>
                    
                    }
                    return null;
                })}
                <div className="cartitem-down">
                    <div className="cartitem-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitem-totalitem">
                            <p>Sub Total</p>
                            <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr/>
                            <div className="cartitem-totalitem">
                                <p>Shipping fee</p>
                                <p>Free</p>
                            </div>
                            <hr/>
                            <div className="cartitem-totalitem">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            <button id="cart-item-total-butt">PROCEED TO CHECKUOUT</button>
                        </div>
                       
                    </div>
                    <div className="cartitem-promocode">
                            <p>If you have a promo code,Enter it here</p>
                            <div className="cartitem-promobox">
                                <input placeholder="promocode" />
                                <button>Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem