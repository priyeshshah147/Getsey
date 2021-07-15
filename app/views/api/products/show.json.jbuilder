 json.products do 
    json.set! @product.id do
        json.extract! @product, :id, :product_name, :price, :seller_id, :description
        json.image url_for(@product.photo)
    end
end

json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :rating, :comment, :product_id, :reviewer_id 
        end
    end
end