export const fetchReviews = (product_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${product_id}/reviews`
    })
)

// export const fetchReview = (reviewId) => (
//     $.ajax({
//         method: 'GET', 
//         url: `/api/reviews/${reviewId}`
//     })
// )
export const createReview = review => (
    $.ajax({
        method:'POST', 
        url: `/api/products/${review.product_id}/reviews`, 
        data: {review}
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        method:'DELETE', 
        url: `/api/reviews/${reviewId}`
    })
)

export const updateReview = review => (
    $.ajax({
        method:'PATCH',
        url: `/api/reviews/${review.id}`,
        date: {review}
    })
)