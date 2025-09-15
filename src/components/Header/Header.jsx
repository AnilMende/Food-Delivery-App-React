import React from "react";
import styled from 'styled-components';
const Header = () => {
    return(
        <HeaderContainer>
            <div className="header-contents">
                <h2>Order Your Favourite Food Here</h2>
                <p>Choose from a diverse featuring a dectable array of dishes crafted with the finest ingredients and
                   culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one 
                   delicious meal at a time.
                </p>
                <Button>View Menu</Button>
            </div>
        </HeaderContainer>
    )
}
export default Header;

const HeaderContainer = styled.div`
      height: 34vw;
      margin: 30px auto;
      background: url('/header_img.png') no-repeat;
      background-size: contain;
      position: relative;
      

      .header-contents{
         position: absolute;
         display: flex;
         flex-direction: column;
         align-items: start;
         gap: 1.5vw;
         max-width: 50%;
         bottom: 10%;
         left: 6vw;
         animation: fadeIn 3s;
      }

      h2{
        color: white;
        font-weight: 500;
        font-size: max(4.5vw, 22px);
      }
      p{
        color: white;
        font-size: 1vw;
      }

      /* making responsive */

      @media (max-width:1050px){
         .header-contents{
           max-width: 45%;
         }
      }

      @media (max-width:750px){
         .header-contents{
           max-width: 65%;
         }
         .header-contents p{
          display: none;
         }
      }
      
`;

const Button = styled.button`
      border: none;
      color: gray;
      background-color: #fff;
      padding: 19px 38px;
      border-radius: 50px;
      font-size: max-width(1vw, 13px);
      font-weight: 500;
      cursor: pointer;

      /* making responsive */
      @media (max-width:750px){
         padding: 2vw 4vw;
      }
`;
