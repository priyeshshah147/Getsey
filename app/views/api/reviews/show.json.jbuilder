json.review do
    #    json.set! @review.id do
        json.extract! @review, :id, :rating, :comment, :product_id, :reviewer_id 
        json.username @review.reviewer.username
    # end
end

json.reviewer do
      json.set! @review.reviewer.id do
        json.extract! @review.reviewer, :id, :username, :email
    end
end
