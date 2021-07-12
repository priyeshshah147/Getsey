class Product < ApplicationRecord 
    validates :product_name, :description, :category_id, :price, :seller_id, presence: true
    validates :price, numericality: { greater_than: 0}

    has_one_attached :photo


end