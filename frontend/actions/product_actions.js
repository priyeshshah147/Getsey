import * as ProductAPIUtil from '../utils/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT, 
    product,


})

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS, 
    products
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_PRODUCT_ERRORS, 
    errors
})

export const fetchProduct = (productId) => dispatch => (
    ProductAPIUtil.fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchProducts = () => dispatch => (
    ProductAPIUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

