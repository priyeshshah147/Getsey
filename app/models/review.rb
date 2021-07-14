class Review < ApplicationRecord
    validates :product_id,  :comment, :reviewer_id, presence: true
    validates :rating, inclusion: {in: (1..5)}

    belongs_to :reviewer, 
    foreign_key: :reviewer_id, 
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id, 
    class_name: :Product
end
