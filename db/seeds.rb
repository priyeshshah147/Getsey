# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.delete_all

product1 = Product.create!(
    product_name: 'Potato',
    description: 'One a potato two a potato',
    category_id:1,
    price: 1,
    seller_id: 1
)
product2 = Product.create!(
    product_name: 'Banana',
    description: 'Minions favorite',
    category_id:2,
    price: 2,
    seller_id: 2
)
# product2.photo.attach(io: URI.open("https://getsey-dev.s3.us-east-2.amazonaws.com/m5VUsQwFxmN7pkZTCnmk33sX"), filename: "1.jpg")