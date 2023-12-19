import React from "react";
import './description.css'
const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
                <p>
                Because buying online doesn't require a visit to a retail store and products can be shipped from any place in the world, consumers aren't limited to shops in their local vicinity and spend less time shopping. That's what makes ecommerce an attractive alternative for them
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox