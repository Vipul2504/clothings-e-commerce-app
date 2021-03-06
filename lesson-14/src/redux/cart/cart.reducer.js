import CartActionTypes from './cart.types';
import { AddItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  CartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
      case CartActionTypes.ADD_ITEM:
        return{
          ...state ,
          CartItems:AddItemToCart(state.CartItems,action.payload)
        }
    default:
      return state;
  }
};

export default cartReducer;
