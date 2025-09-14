import React, { useContext } from "react";
import { food_list } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import styled from "styled-components";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreContext);

    return(
        <FoodDisplayContainer id="food-display">
            <h2>Top Dishes For You</h2>
            <div className="food-display-list">
                {
                    food_list.map((item, index) => {
                        return <FoodItem 
                                 key={index} 
                                 id={item._id} 
                                 name={item.name} 
                                 description={item.description}
                                 price={item.price} 
                                 image={item.image} />
                                
                    })
                }
            </div>
        </FoodDisplayContainer>
    )
}
export default FoodDisplay;

const FoodDisplayContainer = styled.div`
      margin-top: 30px;

      h2{
        font-size: max(2vw, 24px);
        font-weight: 600;
      }

      .food-display-list{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(240px, 1fr));
        margin-top: 30px;
        gap: 30px;
        row-gap: 50px;
        
      }
`;