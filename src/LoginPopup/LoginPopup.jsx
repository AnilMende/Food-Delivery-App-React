import React, { useState } from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";

const LoginPopup = ({setShowLogin}) => {

    const [curState, setCurState] = useState("Sign Up");

    return(
        <LoginPopupContainer id = "login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {curState === "Login" ? <></> : <input type="text" placeholder="Enter Your Name" required />}
                    
                    <input type="email" placeholder="Enter Email" required/>
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{curState === "Sign Up" ? "Create Account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    curState === "Login"
                    ?<p>Create a New Account. <span onClick={() => setCurState("Sign Up")}>Click Here</span></p>
                    :<p>Already have an account? <span onClick={() => setCurState("Login")}>Login Here</span></p>
                }
            </form>
        </LoginPopupContainer>
    )
}
export default LoginPopup;

const LoginPopupContainer = styled.div`
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: #00000090;
      display: grid;

      .login-popup-container{
        place-self: center;
        width: max-content(23vw, 330px);
        color: #808080;
        background-color: white;
        display: flex;
        flex-direction: column;
        gap:25px;
        padding: 25px 30px;
        border-radius: 8px;
        font-size: 14px;
        animation: fadeIn 0.5s;
      }

      .login-popup-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
      }
      .login-popup-title img{
        cursor: pointer;
        width: 16px;
      }

      .login-popup-inputs{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .login-popup-inputs input{
        outline: none;
        padding: 10px;
        border: 1px solid #c9c9c9;
        border-radius: 4px;
      }

      .login-popup-container button{
        cursor: pointer;
        padding: 10px;
        border-radius: 4px;
        border: none;
        color: white;
        background-color: tomato;
        font-size: 15px;
      }
      .login-popup-condition{
        display: flex;
        align-items: start;
        gap: 8px;
        margin-top: -15px;
      }
      .login-popup-condition input{
        margin-top: 5px;
      }

      p span{
        color: tomato;
        font-weight: 500;
        cursor: pointer;
      }

`;