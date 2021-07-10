export const fetchProducts = () => (
    $.ajax({
        url:`/api/products`, 
        method: 'GET'
    })
)

export const fetchProduct = (productId) => (
    $.ajax({
        url:`/api/products/${productId}`, 
        method: 'GET'
    })
)

export const createProduct = (product) => (
    $.ajax({
        url:`/api/products/`, 
        method: 'POST', 
        data: {product}
    })
)