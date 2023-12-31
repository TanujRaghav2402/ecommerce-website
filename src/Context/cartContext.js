import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/cartReducer"
import { useEffect } from "react";

const CartContext = createContext();

const initialState={
    cart:[],
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
}

const CartProvider =({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState);

    const addProduct=(id,singleProduct)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,singleProduct}});
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    
    return <CartContext.Provider value={{...state,addProduct,removeItem,clearCart}}>{children}</CartContext.Provider>
};

const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider,useCartContext}