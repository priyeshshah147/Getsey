export const fetchCartitems = () => {
    return $.ajax({
        method: 'GET', 
        url: `/api/cartitems`
    })
};

export const updateCartitem = (cartitem) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cartitems/${cartitem.id}`,
        data: {cartitem}
    })
}

export const removeCartitem = (cartitemId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cartitems/${cartitemId}`
    })
}

export const addSingleItem = (cartitem) => {
    return $.ajax({
        method: 'POST', 
        url: `/api/cartitems`,
        data: {cartitem}
    })
}



