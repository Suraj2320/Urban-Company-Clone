import CartReducer from "./CartReducer"
import CartContext from "./CartContext"
import {ADD_TO_CART} from "./Type"
import { useReducer } from "react";


const CartState=({children})=>{

    const initalState={
        showCart:true,
        cartItems:[],
    };

    const [state,dispatch]=useReducer(CartReducer,initalState);

    const addToCart=(item)=>{
        dispatch({type: ADD_TO_CART,payload:item});
    };

    return(
        <CartContext.Provider
        value={{
            showCart:state.showCart,
            cartItems:state.cartItems,
            state,
            addToCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartState