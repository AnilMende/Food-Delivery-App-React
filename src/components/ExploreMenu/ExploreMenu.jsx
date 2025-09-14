import React from "react";
import styled from "styled-components";
import {menu_list} from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
    return(
        <div>
            <ExploreMenuContainer id="explore-menu">
                <h1>Explore Our Menu</h1>
                <p className="menu-text">Choose from a diverse menu featuring a dectable array of dishes.
                    Our mission is to satisfy your cravings and elevate your dining experience,
                    one delicious meal at a time.
                </p>
                <div className="menu-list">
                    {
                        menu_list.map((item, index) => {
                            return(
                                <div
                                  onClick={() => setCategory((prev) => prev === item.menu_name ? "All" : item.menu_name)} 
                                  key={index} className="menu-list-items">
                                    <img 
                                     className={category === item.menu_name ? "active": ""}
                                     src={item.menu_image} alt="menu-image" />
                                    <p>{item.menu_name}</p>
                                </div>
                            )
                            
                        })
                    }
                </div>
                <hr/>
            </ExploreMenuContainer>
        </div>
    )
}
export default ExploreMenu;

const ExploreMenuContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;

      h1{
        color: #262626;
        font-weight: 500;
      }

      .menu-text{
        max-width: 60%;
        columns: #808080;
      }

      .menu-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        text-align: center;
        margin: 20px 0px;
        overflow-x: scroll;
      }
      
      .menu-list::-webkit-scrollbar{
        display: none;
      }

      
      .menu-list-items img{
        width: 7.5vw;
        min-width: 80px;
        cursor: pointer;
        border-radius: 50%;
        transition: 0.2s;
      }
      .menu-list-items p{
        margin-top: 10px;
        color: #747474;
        cursor: pointer;
        font-size: max(1.4vw,16px);
      }

      hr{
        margin: 10px 0px;
        border: none;
        height: 2px;
        background-color: #e2e2e2;
      }

      .menu-list-items .active{
        border: 4px solid tomato;
        padding: 3px;
      }
`;