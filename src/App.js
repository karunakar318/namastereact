import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import obj from "./utils/mockData";
const RestaurantCard=({info})=>{
    return (
        <div className="res-card">
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId} />
            <h3>{info.name}</h3>
            <h3>{info.locality}</h3>
            <h4>{info.avgRating}</h4>
            <h4>{info.cuisines.toString()}</h4>
        </div>
    )
}



const Applayout=()=>{
    const [count,setcount]=useState(0);
  
    return (
        <div className="app">
            <Header/>
            <Body obj={obj}/>
           
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));




root.render(<Applayout/>);
