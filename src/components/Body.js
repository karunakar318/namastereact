import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
function filter(obj){
    obj=obj.filter(obj=>obj.info.avgRating>4.0);
    
    return obj;
}
const Body=({obj})=>{
    const [data,setdata]=useState(obj);
    console.log(setdata);
    console.log(data);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    
                    setdata(filter(data));
                }}>Top rated restaurant</button>
            </div>
            
            <div className="res-container">
                
                {data.map((i)=>{
                    return <RestaurantCard key={i.info.id} {...i}/>
                })}
                
            </div>
        </div>
    )
}
export default Body;