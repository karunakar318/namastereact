import { CDN_URL } from "../utils/constant";
const RestaurantCard=({info})=>{
    return (
        <div className="res-card">
            <img className="res-img" src={CDN_URL+info.cloudinaryImageId} />
            <h3>{info.name}</h3>
            <h3>{info.locality}</h3>
            <h4>{info.avgRating}</h4>
            <h4>{info.cuisines.toString()}</h4>
        </div>
    )
}
export default RestaurantCard;