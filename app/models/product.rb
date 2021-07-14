class Product < ApplicationRecord 
    validates :product_name, :description, :category_id, :price, :seller_id, presence: true
    validates :price, numericality: { greater_than: 0}

    has_one_attached :photo

    has_many :reviews, 
    foreign_key: :product_id, 
    class_name: :Review

end