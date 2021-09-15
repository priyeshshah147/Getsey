@cartitems.each do |item|
    json.set! item.id do 
        json.partial! '/api/cart_items/cart_item', cartitem: item
        json.extract! item.product, :product_name, :price, :seller_id
        json.photoUrl url_for(item.product.photo)
        # json.extract! item.product.seller, :username 
    end
end
# @cart_items.each do |cart_item|
#     json.set! cart_item.id do
#         json.partial! 'api/cart_items/cart_item', cart_item: cart_item, product: @products[cart_item.id]
#     end
# end