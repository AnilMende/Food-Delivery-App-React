import React, { useContext, useState } from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({id, name, description, price, image}) => {

    // state for adding items to the cart and increasing the itemcount for every addition of the item
    // const [itemCount, setItemCount] = useState(0);

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return(
        <FoodItemContainer>

            <div className="food-item-image">
                <img className="food-image" src={image} alt="" />
                {
                    !cartItems[id] ? <img className="add" 
                                      //  onClick={() => setItemCount((prev) => prev + 1)} 
                                      onClick={() => addToCart(id)}
                                      src={assets.add_icon_white} alt="" />

                                : <div className="food-item-counter">
                                     <img 
                                      // onClick={() => setItemCount((prev) => prev - 1)} 
                                      onClick={() => removeFromCart(id)}
                                       src={assets.remove_icon_red} alt="" />

                                     <p>{cartItems[id]}</p>

                                     <img 
                                    //  onClick={() => setItemCount((prev) => prev + 1)} 
                                      onClick={() => addToCart(id)}
                                      src={assets.add_icon_green} alt="" />
                                 </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>

        </FoodItemContainer>
    )
}
export default FoodItem;

const FoodItemContainer = styled.div`
      width: 100%;
      margin: auto;
      border-radius: 15px;
      box-shadow: 0px 0px 10px #00000015;
      transition: 0.3s;
      animation: fadeIn 1s;

      .food-image{
        width: 100%;
        border-radius: 15px 15px 0px 0px;
      }

      .food-item-info{
        padding: 20px;
      }

      .food-item-name-rating{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .food-item-name-rating p{
        font-size: 20px;
        font-weight: 600;
      }
      .food-item-name-rating img{
        width: 70px;
      }

      .food-item-description{
        font-size: 12px;
        color: #676767;
      }

      .food-item-price{
        font-size: 22px;
        font-weight: 500;
        color: tomato;
        margin: 10px 0;
      }


      .food-item-image{
        position: relative;
      }

      .food-item-image .add{
        position: absolute;
        width: 35px;
        bottom: 15px;
        right: 15px;
        cursor: pointer;
        border-radius: 50%;
      }

      .food-item-counter{
        position: absolute;
        bottom: 15px;
        right: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px;
        border-radius: 50px;
        background-color: white;
      }
      .food-item-counter img{
        width: 30px;
      }
`;