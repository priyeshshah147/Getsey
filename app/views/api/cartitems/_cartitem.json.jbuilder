cartitems.each do |item|
    json.set! item.id do 
        json.extract! item, :id, :product_id, :user_id, :quantity
        json.extract! item.product, :product_name, :price, :seller_id
        json.photoUrl url_for(item.product.photo) 
    end
end