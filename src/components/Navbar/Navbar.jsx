import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);


    // const menuItems = [
    //     {
    //         name: "Home",
    //         type: "home"
    //     },
    //     {
    //         name: "Menu",
    //         type: "menu"
    //     },
    //     {
    //         name: "Mobile-App",
    //         type: "mobile-app"
    //     },
    //     {
    //         name: "Contact-Us",
    //         type: "contact-us"
    //     }
    // ]

    return (
        <NavbarContainer id="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>

            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active": ""}>Home</Link>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active": ""}>Menu</a>
                <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active": ""}>Mobile-App</a>
                <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-Us</a>
                {/* {
                    menuItems.map((value) => (
                        <li key={value.name}
                            onClick={() => setMenu(value.type)}
                            className={menu === (value.type) ? "active" : ""}>{value.name}</li>
                    ))
                } */}
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />

                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    {/* this shows the red dot on the cart if the amount is greater than 0 or any item is added */}
                    <div className={getTotalCartAmount() === 0 ? "": "dot"}></div>
                </div>

                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </NavbarContainer>
    )
}
export default Navbar;

const NavbarContainer = styled.div`
      padding: 20px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo{
        width: 150px;
      }

      .navbar-menu{
        display: flex;
        list-style: none;
        gap: 20px;
        font-size: 18px;
        color: rgb(91, 91, 191);
     }

     .navbar-right{
       display: flex;
       align-items: center;
       gap: 40px;
     }

     .navbar-right button{
      background: transparent;
      font-size: 16px;
      color: #49557e;
      border: 1px solid tomato;
      padding: 10px 30px;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.3s;
     }

     .navbar-right button:hover{
       background-color: #fff4f2;
     }

     .active{
       padding-bottom: 2px;
       border-bottom: 2px solid #49557e;
     }

     li{
       cursor: pointer;
     }

     .navbar-search-icon{
       position: relative;
     }

     .navbar-search-icon .dot{
      position: absolute;
      min-width: 10px;
      min-height: 10px;
      background-color: tomato;
      border-radius: 5px;
      top: -8px;
      right: -8px;
     }

     /* Making responsive */
     @media (max-width:1050px){
        
         .logo{
            width:140px;
         }
         .navbar-menu{
           gap:20px;
           font-size:17px;
         }
         .navbar-right{
           gap:30px;
         }
         .navbar-right img{
           width:22px;
         }
         .navbar-right button{
           padding: 8px 25px;
         }
     }

      @media (max-width:900px){
        
         .logo{
            width:120px;
         }
         .navbar-menu{
           gap:15px;
           font-size:16px;
         }
         .navbar-right{
           gap:20px;
         }
         .navbar-right img{
           width:20px;
         }
         .navbar-right button{
           padding: 7px 20px;
           font-size: 15px;
         }
     }

      @media (max-width:750px){
        
         .navbar-menu{
           display: none;
         }
     }

     
`;