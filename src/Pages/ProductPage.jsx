import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/BreadCrum";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/Productdisplay/Productdisplay";
import DescriptionBox from "../Components/Desccriptionbox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedPRoducts";
const ProductPage = () => {
    const{all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
    return(
        <div>
           <Breadcrum product={product} />
           <ProductDisplay product={product} />
           <DescriptionBox/>
           <RelatedProducts/>
        </div>
    )
}
export default ProductPage