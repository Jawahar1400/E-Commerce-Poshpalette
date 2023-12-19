import React, { useContext } from "react";
import './productdisplay.css'
import star_icon from "../Assests/star_icon.png"
import star_dull from "../Assests/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}= useContext(ShopContext)
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img  src={product.image} />
                    <img  src={product.image} />
                    <img  src={product.image} />
                    <img  src={product.image} />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} />
                </div>
            </div>
            <div className="product-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_dull} />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-old-price">${product.old_price}</div>
                    <div className="productdisplay-right-new-price">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A product description is a marketing copy that describes a product's features and benefits. 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women,T Shirt,Crop Top,</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern,Latest</p>
            </div>
        </div>
    )
}
export default ProductDisplay