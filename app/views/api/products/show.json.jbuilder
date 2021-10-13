

json.partial! "api/products/product", product: @product

json.image url_for(@product.photo)


json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :rating, :comment, :product_id, :reviewer_id 
        end
    end
end

json.seller do 
    json.partial! "api/users/user", user: @product.seller
end

# json.extract! product.seller, :username