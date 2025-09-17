import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <PlaceOrderContainer>
            <form className="place-order">
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>

                    <div className="multi-fields">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="email" placeholder="Enter Email" />
                    <input type="text" placeholder="Street" />

                    <div className="multi-fields">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder="Pin Code" />
                        <input type="text" placeholder="Country" />
                    </div>
                    <input type="text" placeholder="phone" />
                </div>


                <div className="place-order-right">

                    <div className="cart-total">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>${getTotalCartAmount() === 0 ? 0 : 10}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</b>
                            </div>
                        </div>
                        <button>PROCEED TO PAYMENT</button>
                    </div>

                </div>
            </form>
        </PlaceOrderContainer>
    )
}
export default PlaceOrder;
const PlaceOrderContainer = styled.div`

       .place-order{
         display: flex;
         justify-content: space-between;
         align-items: start;
         gap: 50px;
         margin-top: 100px;
       }

       .place-order-left{
         width: 100%;
         max-width: max(30%, 500px);
       }

       .place-order-left .title{
         font-size: 30px;
         font-weight: 600;
         margin-bottom: 50px;
       }

       .place-order-left input{
         margin-bottom: 15px;
         width: 100%;
         padding: 10px;
         border: 1px solid #c5c5c5;
         border-radius: 4px;
         outline-color: tomato;
       }

       .place-order-left .multi-fields{
         display: flex;
         gap: 10px;
       }

       .place-order-right{
         width: 100%;
         max-width: max(40%, 500px);
       }

       .place-order .cart-total button{
         margin-top: 30px;
       }

       .cart-total{
         flex: 1;
         display: flex;
         flex-direction: column;
         gap: 20px;
       }
      
      .cart-total hr{
        margin: 10px 0px;
      }

      .cart-total-details{
        display: flex;
        justify-content: space-between;
        color: #555;
      }

      .cart-total button{
        background-color: tomato;
        color: white;
        border: none;
        padding: 12px 0px;
        width: max(15vw,200px);
        border-radius: 4px;
        cursor: pointer;
      }

      /* Making responsive */
      @media(max-width:750px){
        .place-order{
            display: flex;
            flex-direction: column;
            margin-top: 50px;
        }
      }

`;
