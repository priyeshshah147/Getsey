# @products.each do |product|
#   json.extract product, :id, :product_name, :description, :price,  :seller_id
# end

@products.each do |product|
    json.set! product.id do
      json.partial! 'product', product: product
      if  product.photo.attached?
        json.image url_for(product.photo)
      end
      json.extract! product.seller, :username
    end
 
end
#  json.seller do 
#       json.partial! "api/users/user", user: @product.seller
#   end