export const AddItemToCart =(cartItem, cartItemToAdd) => {
    const ExistingCartItem = cartItem.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(ExistingCartItem){
        return cartItem.map(cartItem=> cartItem.id === cartItemToAdd.id ? {...cartItem, quantity:cartItem.quantity + 1}: cartItem)
    }

    return [...cartItem, {...cartItemToAdd, quantity:1}]
}



