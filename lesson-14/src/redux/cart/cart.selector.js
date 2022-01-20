import {createSelector} from 'reselect';

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cartItems =>  cartItems.reduce(
        (accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity,0
      )
)