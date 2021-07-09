# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.delete_all

product1 = Product.create!(
    product_name: 'Superman',
    description: 'I hate crypto-currency it puts me weak',
    category_id:1,
    price: 1,
    seller_id: 1
)
product2 = Product.create!(
    product_name: 'Jabulani',
    description: 'Finest soccer ball',
    category_id:2,
    price: 2,
    seller_id: 2
)
product3 = Product.create!(
    product_name: 'Beetle',
    description: 'Classic metal toy car',
    category_id:1,
    price: 1,
    seller_id: 1
)
product4 = Product.create!(
    product_name: 'Dog toy',
    description: 'tough rubber toy for dogs',
    category_id:2,
    price: 2,
    seller_id: 2
)
product5 = Product.create!(
    product_name: 'Robowheel',
    description: 'Educative toys for young children',
    category_id:1,
    price: 1,
    seller_id: 1
)


