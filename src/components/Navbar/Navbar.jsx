import React, { useState } from "react";
import './Navbar.css';
import { assets } from "../../assets/assets";
const Navbar = () => {

    const [menu, setMenu] = useState("home");

    const menuItems = [
        {
            name:"Home",
            type:"home"
        },
        {
            name:"Menu",
            type:"menu"
        },
        {
            name:"Mobile-App",
            type:"mobile-app"
        },
        {
            name:"Contact-Us",
            type:"contact-us"
        }
    ]

    return(
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />

            <ul className="navbar-menu">
                {/* <li className={menu === "home" ? "active": ""}>Home</li>
                <li className={menu === "menu" ? "active": ""}>Menu</li>
                <li className={menu === "mobile-app" ? "active": ""}>Mobile-App</li>
                <li className={menu === "contact-us" ? "active" : ""}>Contact-Us</li> */}
                {
                    menuItems.map((value) => (
                        <li key={value.name}
                            onClick={() => setMenu(value.type)}
                            className={menu === (value.type) ? "active" : ""}>{value.name}</li>
                    ))
                }
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />

                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>

                <button>Sign In</button>
            </div>
        </div>
    )
}
export default Navbar;