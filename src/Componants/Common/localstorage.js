const getStoredCartFromLS = () => {

    const storedStingified = localStorage.getItem('cart');

    if(storedStingified){
        return JSON.parse(storedStingified);
    }
    return []; 
}

const setCartToLS = cart => {
    const parseToStringified = JSON.stringify(cart); 
    localStorage.setItem('cart', parseToStringified); 
}

const removeCartFromLS = id => {
    const cart = getStoredCartFromLS(); 
    const remaining = cart.filter(idx => idx !== id); 
    setCartToLS(remaining);


}

const addToLS = id => {
   const cart = getStoredCartFromLS();
   cart.push(id); 
   setCartToLS(cart);


}

export {addToLS, getStoredCartFromLS, removeCartFromLS}; 