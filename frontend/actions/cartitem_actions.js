import * as CartitemsApiUtil from '../utils/cartitem_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const receiveCartitems  = items => {
    return {
        type: RECEIVE_ITEMS, 
        items
    }
}


export const removeCartitem = itemId => {
    return{
        type: REMOVE_ITEM,
        itemId
    }
}

export const fetchCartitems = () => dispatch=> {
    return CartitemsApiUtil.fetchCartitems()
    .then(items => dispatch(receiveCartitems(items)))
}

export const addcartitem = cartitem => dispatch => {
    return CartitemsApiUtil.createCartitem(cartitem)
    .then(items => dispatch(receiveCartitems(items)))
} 

export const deleteCartitem = itemId => dispatch => {
    return CartitemsApiUtil.removeCartitem(itemId)
    .then(() => dispatch(removeCartitem(itemId)))
}

export const updateCartitem = (itemId, cartitem) => dispatch => {
    return CartitemsApiUtil.updateCartitem(itemId, cartitem )
    .then(items => dispatch(receiveCartitems(items)))
}
