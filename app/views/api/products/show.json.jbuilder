json.extract! @product, :id, :product_name, :price, :seller_id, :description
# json.seller do
#     json.partial! "product", product: @product
# end

json.image url_for(@product.photo)