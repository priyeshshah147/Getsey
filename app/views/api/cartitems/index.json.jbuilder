cartitems.each do |item|
    json.set! item.id do 
        json.partial! '/api/cartitems/cartitem', cartitem: @cartitem
        json.extract! item.product, :product_name, :price, :seller_id
        json.photoUrl url_for(item.product.photo)
        json.extract! item.product.seller, :username 
    end
end