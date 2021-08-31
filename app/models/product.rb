class Product < ApplicationRecord 
    validates :product_name, :description, :category_id, :price, :seller_id, presence: true
    validates :price, numericality: { greater_than: 0}

    has_one_attached :photo

    belongs_to :seller, 
    foreign_key: :seller_id,
    class_name: :User

    has_many :reviews, 
    foreign_key: :product_id, 
    class_name: :Review

    has_many :carts,
    foreign_key: :product_id,
    class_name: :CartItem

    has_many :buyers,
    through: :carts,
    source: :user

    def average_rating
        reviews.average(:rating)
    end

end