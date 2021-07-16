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
    username: 'Yung',
    email: 'yung@gmail.com',
    password: 'password'    
)
user3 = User.create!(
    username: 'Sammy',
    email: 'sammy@gmail.com',
    password: 'password'    
)

user4 = User.create!(
    username: 'Donnie',
    email: 'donnie@gmail.com',
    password: 'password'    
)
user5 = User.create!(
    username: 'Ariel',
    email: 'ariel@gmail.com',
    password: 'password'    
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
    product_name: 'Wallet',
    description: 'Koi Fish personalized men wallet, custom gift for men, animal wallet for him, anniversary gift, Father Day gift idea for him 2021',
    category_id:2,
    price: 25.99,
    seller_id: 5
)
product7.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet1.jpg"), filename: "7.jpg")

product8 = Product.create!(
    product_name: 'Wallet',
    description: 'PU personalized men wallet, custom gift for men, animal wallet for him, anniversary gift, Father Day gift idea for him 2021',
    category_id:2,
    price: 19.99,
    seller_id: 5
)
product8.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet2.jpg"), filename: "8.jpg")

product9 = Product.create!(
    product_name: 'Wallet',
    description: 'Cool style for summer',
    category_id:2,
    price: 15.60,
    seller_id: 5
)
product9.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet3.jpg"), filename: "9.jpg")

product10 = Product.create!(
    product_name: 'Wallet',
    description: 'Highquality heaphones, the best you can ever get',
    category_id:2,
    price: 200.00,
    seller_id: 5
)
product10.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet4.jpg"), filename: "10.jpg")

product11 = Product.create!(
    product_name: 'Wallet',
    description: 'You can`t go wrong with black wallet, very fine and good looking',
    category_id:2,
    price: 15.60,
    seller_id: 5
)
product11.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet5.jpg"), filename: "11.jpg")


product12 = Product.create!(
    product_name: 'wallet',
    description: 'Style is nothing without a class, so is a man without a waller... nothing',
    category_id:2,
    price: 100.51,
    seller_id: 5
)
product12.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet6.jpg"), filename: "12.jpg")

product13 = Product.create!(
    product_name: 'Ring',
    description: 'Rose Gold Tungsten Ring Men Women Wedding Band Beveled Edge Grey Brushed Design 6MM Size 5 6 7 8 9 10 11 12 13 14 Anniversary Love Gift',
    category_id:3,
    price: 259.99,
    seller_id: 5
)
product13.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring1.jpg"), filename: "1.jpg")

product14 = Product.create!(
    product_name: 'Ring',
    description: 'Highquality titanium ring, the best you can ever get',
    category_id:3,
    price: 200.00,
    seller_id: 5
)
product14.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring2.jpg"), filename: "10.jpg")

product15 = Product.create!(
    product_name: 'Ring',
    description: 'Casual ring. stylish and affordable',
    category_id:3,
    price: 15.60,
    seller_id: 5
)
product15.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring3.jpg"), filename: "11.jpg")


product16 = Product.create!(
    product_name: 'Ring',
    description: 'Tungsten Carbide Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 100.51,
    seller_id: 5
)
product16.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring4.jpg"), filename: "12.jpg")

product17 = Product.create!(
    product_name: 'Ring',
    description: 'Stainless Steel Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 15.99,
    seller_id: 5
)
product17.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring5.jpg"), filename: "12.jpg")

product18 = Product.create!(
    product_name: 'Ring',
    description: 'Diamonf Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 999.99,
    seller_id: 5
)
product18.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring6.jpg"), filename: "12.jpg")

