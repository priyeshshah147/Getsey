
@products.each do |product|
    json.set! product.id do
      json.partial! 'product', product: product
      if  product.photo.attached?
        json.image url_for(product.photo)
      end
      json.seller do 
        json.partial! "api/users/user", user: product.seller
      end
      
    end

 
end
