# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
# User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Product.delete_all
User.delete_all

user1 = User.create!(
    username: 'Demo',
    email: 'demo@gmail.com',
    password: 'password'    
)

user2 = User.create!(
    username: 'store2',
    email: 'store2@gmail.com',
    password: 'store2'    
)
user3 = User.create!(
    username: 'store3',
    email: 'store3@gmail.com',
    password: 'store3'    
)

user4 = User.create!(
    username: 'store4',
    email: 'store4@gmail.com',
    password: 'store4'    
)
user5 = User.create!(
    username: 'store5',
    email: 'store5@gmail.com',
    password: 'store5'    
)


product1 = Product.create!(
    product_name: 'Schaffhausen',
    description: 'SCHAFFHAUSEN, Watch, mens watch, mechanical wristWatch, modern watch, Swiss made, gift for men',
    category_id:1,
    price: 299.99,
    seller_id: 1
)
product1.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch.jpg"), filename: "1.jpg")

product2 = Product.create!(
    product_name: 'Custom Watch',
    description: 'Personalized Custom Watch Groomsmen Watch Father Of The Groom Best Man Gift Ideas Engraved Metal Watch Usher Gift Wedding Party Gift',
    category_id:1,
    price: 50.50,
    seller_id: 2
)
product2.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch1.jpg"), filename: "2.jpg")

product3 = Product.create!(
    product_name: 'Mi Band',
    description: 'Xiaomi Watch Strap - Mi band 6,5,4,3 Strap Nylon Sport loop watch Belt Pulsera correa Miband - Hyper Grape',
    category_id:1,
    price: 45.99,
    seller_id: 1
)
product3.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch2.jpg"), filename: "3.jpg")

product4 = Product.create!(
    product_name: 'Tissot',
    description: 'Tissot Chronograph mens watch stainless steel swiss watch',
    category_id:1,
    price: 149.99,
    seller_id: 1
)
product4.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch3.jpg"), filename: "4.jpg")

product5 = Product.create!(
    product_name: 'Omega',
    description: 'Omega vintage Tiffany & Co. Gold Plated mens 1950 Automatic Bumper Caliber 342 watch',
    category_id:1,
    price: 131.50,
    seller_id: 3
)
product5.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch4.jpg"), filename: "5.jpg")

product6 = Product.create!(
    product_name: 'DW',
    description: 'Daniel Wellington Classy Brown & Silver Toned Wristwatch w/ Adjustable Band',
    category_id:1,
    price: 7.50,
    seller_id: 5
)
product6.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch5.jpg"), filename: "6.jpg")

product7 = Product.create!(
    product_name: 'Earing',
    description: 'Stylish earings that makes you smiles',
    category_id:1,
    price: 25.99,
    seller_id: 5
)
product7.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet1.jpg"), filename: "7.jpg")

product8 = Product.create!(
    product_name: 'Sunglasses',
    description: 'Its all style and comfort for summer',
    category_id:1,
    price: 159.99,
    seller_id: 5
)
product8.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet2.jpg"), filename: "8.jpg")

product9 = Product.create!(
    product_name: 'hat',
    description: 'Cool style for summer',
    category_id:1,
    price: 15.60,
    seller_id: 5
)
product9.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet3.jpg"), filename: "9.jpg")

product10 = Product.create!(
    product_name: 'Beats by Dr Dre',
    description: 'Highquality heaphones, the best you can ever get',
    category_id:1,
    price: 200.00,
    seller_id: 5
)
product10.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet4.jpg"), filename: "10.jpg")

product11 = Product.create!(
    product_name: 'Black Heels',
    description: 'You can`t go wrong with black heels. A perfect match for every dress',
    category_id:1,
    price: 15.60,
    seller_id: 5
)
product11.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet5.jpg"), filename: "11.jpg")


product12 = Product.create!(
    product_name: 'Black Tux',
    description: 'Style is nothing without a class, so is a man without a suit... nothing',
    category_id:1,
    price: 100.51,
    seller_id: 5
)
product12.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet6.jpg"), filename: "12.jpg")

# product13 = Product.create!(
#     product_name: 'Wallet',
#     description: 'Sleek design for all your cards',
#     category_id:2,
#     price: 59.99,
#     seller_id: 5
# )
# product13.photo.attach(io: URI.open("https://getsey-seeds.s3.us-east-2.amazonaws.com/wallet4.jpg"), filename: "1.jpg")

