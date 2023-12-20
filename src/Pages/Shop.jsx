import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollection from "../Components/Newcollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offer/>
            <NewCollection/>
            <NewsLetter/>
            <h1>TEST</h1>
        </div>
    )
}
export default Shop