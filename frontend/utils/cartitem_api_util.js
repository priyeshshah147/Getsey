export const fetchCartitems = () => {
    return $.ajax({
        method: 'GET', 
        url: `/api/cart_items`
    })
};

export const updateCartitem = (cartitem) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cart_items/${cartitem.id}`,
        data: {cartitem}
    })
}

export const removeCartitem = (cartitemId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${cartitemId}`
    })
}

export const addSingleItem = (cartitem) => {
    return $.ajax({
        method: 'POST', 
        url: `/api/cart_items`,
        data: {cartitem}
    })
}



