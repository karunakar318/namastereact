import constant from "../utils/constant";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constant} />
            </div>
            <div className="nav-itmes"> 
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;