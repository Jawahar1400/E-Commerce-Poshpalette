import React from "react";
import './breadcrumm.css'
import arrowIcon from "../Assests/breadcrum_arrow.png"
const Breadcrum = (props)=>{
    const {product} = props;
    return(
        <div className="breadcrum">
            HOME<img src={arrowIcon} alt="" /> 
            SHOP <img src={arrowIcon} alt=""/> 
            {product.category} <img src={arrowIcon} /> {product.name}
        </div>
    )
}
export default Breadcrum