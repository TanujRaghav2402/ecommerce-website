const cartReducer = (state,action) => {
if(action.type==="ADD_TO_CART"){
    let{ id,singleProduct} = action.payload;

    let cartProduct;

    cartProduct={
        id:id,
        name:singleProduct.name,
        amount:(singleProduct.price/100),
        image:singleProduct.image[0].url,
    }
  return{
    ...state,
    cart:[...state.cart,cartProduct],
  }
}
if (action.type === "REMOVE_ITEM") {
  let updatedCart = state.cart.filter(
    (curItem) => curItem.id !== action.payload
  );
  return {
    ...state,
    cart: updatedCart,
  };
}
if (action.type === "CLEAR_CART") {
  return {
    ...state,
    cart: [],
  };
}

}
export default cartReducer

