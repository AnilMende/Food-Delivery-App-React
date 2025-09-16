import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    // state for the adding and removing the items
    const [cartItems, setCartItems] = useState({});

    // adding to cart
    const addToCart = (itemId) => {

        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}));
        }
        else{
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}));
        }
    }

    // removing from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}));
    }

    // To calculate the total amount of the cart

    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for(const item in cartItems){
            // if the items count is greater than 0 that is added to cart and we calculate the total amount
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        // if you avoid the return of totalAmount the cart total will not get updated
        return totalAmount;
    }

    // This is to check the cart Items

    // useEffect(() => {
    //     console.log(cartItems);

    // }, [cartItems]);
    
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;