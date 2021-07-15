json.reviews do
       json.set! @review.id do
        json.extract! @review, :id, :rating, :comment, :product_id, :reviewer_id 
    end
end

json.users do
      json.set! @review.reviewer.id do
        json.extract! @review.reviewer, :id, :username, :email
    end
end
