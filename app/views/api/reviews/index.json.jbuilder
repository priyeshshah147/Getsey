@reviews.each do |review|

    json.reviews do
        # json.partial! `/api/reviews/review`, review: review
        json.set! review.id do
            json.extract! review, :id, :rating, :comment, :product_id, :reviewer_id 
        end
    end
    
    json.users do
        # json.partial! `/api/users/user`, user: review.reviewer
        json.set! review.reviewer.id do
            json.extract! review.reviewer, :id, :username, :email
        end
    end
    
    # json.average_rating review.product.average_rating

end

