import React from "react";
import Item from "../Item/Item";
import new_collection from '../Assests/new_collections';
import './newCollection.css'
const NewCollection=()=>{
    return(
        <div className="new-collection">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collection">
           {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
           })} 
            </div>
        </div>
    )
}
export default NewCollection