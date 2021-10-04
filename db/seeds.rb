# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
# User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
# Product.delete_all
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

if !product1.photo.attached?
    product1.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch.jpg"), filename: "1.jpg")
end
product2 = Product.create!(
    product_name: 'Custom Watch',
    description: 'Personalized Custom Watch Groomsmen Watch Father Of The Groom Best Man Gift Ideas Engraved Metal Watch Usher Gift Wedding Party Gift',
    category_id:1,
    price: 50.50,
    seller_id: 2
)
if !product2.photo.attached?
    product2.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch1.jpg"), filename: "2.jpg")
end
product3 = Product.create!(
    product_name: 'Mi Band',
    description: 'Xiaomi Watch Strap - Mi band 6,5,4,3 Strap Nylon Sport loop watch Belt Pulsera correa Miband - Hyper Grape',
    category_id:1,
    price: 45.99,
    seller_id: 1
)
if !product3.photo.attached?
    product3.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch2.jpg"), filename: "3.jpg")
end
product4 = Product.create!(
    product_name: 'Tissot',
    description: 'Tissot Chronograph mens watch stainless steel swiss watch',
    category_id:1,
    price: 149.99,
    seller_id: 1
)
if !product4.photo.attached?
    product4.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch3.jpg"), filename: "4.jpg")
end
product5 = Product.create!(
    product_name: 'Omega',
    description: 'Omega vintage Tiffany & Co. Gold Plated mens 1950 Automatic Bumper Caliber 342 watch',
    category_id:1,
    price: 131.50,
    seller_id: 3
)
if !product5.photo.attached?
    product5.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch4.jpg"), filename: "5.jpg")
end
product6 = Product.create!(
    product_name: 'DW',
    description: 'Daniel Wellington Classy Brown & Silver Toned Wristwatch w/ Adjustable Band',
    category_id:1,
    price: 7.50,
    seller_id: 5
)
if !product6.photo.attached?
    product6.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch5.jpg"), filename: "6.jpg")
end
product7 = Product.create!(
    product_name: 'Wallet',
    description: 'Koi Fish personalized men wallet, custom gift for men, animal wallet for him, anniversary gift, Father Day gift idea for him 2021',
    category_id:2,
    price: 25.99,
    seller_id: 5
)
if !product7.photo.attached?
    product7.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet1.jpg"), filename: "7.jpg")
end
product8 = Product.create!(
    product_name: 'Wallet',
    description: 'PU personalized men wallet, custom gift for men, animal wallet for him, anniversary gift, Father Day gift idea for him 2021',
    category_id:2,
    price: 19.99,
    seller_id: 5
)
if !product8.photo.attached?
    product8.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet2.jpg"), filename: "8.jpg")
end
product9 = Product.create!(
    product_name: 'Wallet',
    description: 'Cool style for summer',
    category_id:2,
    price: 15.60,
    seller_id: 5
)
if !product9.photo.attached?
    product9.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet3.jpg"), filename: "9.jpg")
end
product10 = Product.create!(
    product_name: 'Wallet',
    description: 'Highquality heaphones, the best you can ever get',
    category_id:2,
    price: 200.00,
    seller_id: 5
)
if !product10.photo.attached?
    product10.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet4.jpg"), filename: "10.jpg")
end
product11 = Product.create!(
    product_name: 'Wallet',
    description: 'You can`t go wrong with black wallet, very fine and good looking',
    category_id:2,
    price: 15.60,
    seller_id: 5
)
if !product11.photo.attached?
    product11.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet5.jpg"), filename: "11.jpg")
end

product12 = Product.create!(
    product_name: 'wallet',
    description: 'Style is nothing without a class, so is a man without a waller... nothing',
    category_id:2,
    price: 100.51,
    seller_id: 5
)
if !product12.photo.attached?
    product12.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet6.jpg"), filename: "12.jpg")
end
product13 = Product.create!(
    product_name: 'Ring',
    description: 'Rose Gold Tungsten Ring Men Women Wedding Band Beveled Edge Grey Brushed Design 6MM Size 5 6 7 8 9 10 11 12 13 14 Anniversary Love Gift',
    category_id:3,
    price: 259.99,
    seller_id: 5
)
if !product13.photo.attached?
    product13.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring1.jpg"), filename: "13.jpg")
end
product14 = Product.create!(
    product_name: 'Ring',
    description: 'Highquality titanium ring, the best you can ever get',
    category_id:3,
    price: 200.00,
    seller_id: 5
)
if !product14.photo.attached?
    product14.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring2.jpg"), filename: "14.jpg")
end
product15 = Product.create!(
    product_name: 'Ring',
    description: 'Casual ring. stylish and affordable',
    category_id:3,
    price: 15.60,
    seller_id: 5
)
if !product15.photo.attached?
    product15.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring3.jpg"), filename: "15.jpg")
end

product16 = Product.create!(
    product_name: 'Ring',
    description: 'Tungsten Carbide Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 100.51,
    seller_id: 5
)
if !product16.photo.attached?
    product16.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring4.jpg"), filename: "16.jpg")
end

product17 = Product.create!(
    product_name: 'Ring',
    description: 'Stainless Steel Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 15.99,
    seller_id: 5
)
if !product17.photo.attached?
    product17.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring6.jpg"), filename: "17.jpg")
end
product18 = Product.create!(
    product_name: 'Ring',
    description: 'Diamond Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 999.99,
    seller_id: 5
)
if !product18.photo.attached?
    product18.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring7.jpg"), filename: "18.jpg")
end
product19 = Product.create!(
    product_name: 'Glasses',
    description: 'Steampunk Round, Blue Reflective, Sunglasses, Unisex, Trendy, Retro, Urban, Hippie, Steampunk, Cool, Vintage Style, Unisex, Steampunk Hip',
    category_id:4,
    price: 19.95,
    seller_id: 2
)
if !product19.photo.attached?
    product19.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass1.jpg"), filename: "19.jpg")
end

product20 = Product.create!(
    product_name: 'Glasses',
    description: 'Brooklyn, (Bling) Reading Glasses for Women W (Hematite + L. Colorado) Genuine European Crystals. +1.25..+3 Square. NY Fifth Avenue',
    category_id:4,
    price: 29.95,
    seller_id: 2
)
if !product20.photo.attached?
    product20.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass2.jpg"), filename: "20.jpg")
end

product21 = Product.create!(
    product_name: 'Glasses',
    description: '90s Square Sunglasses Vintage Inspired , Black Glasses, Orange, Pink, Yellow, Red Lenses, Plastic Frame, Women, Men, Unisex',
    category_id:4,
    price: 14.95,
    seller_id: 2
)
if !product21.photo.attached?
    product21.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass3.jpg"), filename: "21.jpg")
end

product22 = Product.create!(
    product_name: 'Glasses',
    description: 'Golden Boy 1970s Wire Rim Aviator Glasses – Mens Wire Frame Aviator Sunglasses – Shiny Gold Aviator Sunglasses – Old Stock Golden Aviators',
    category_id:4,
    price: 66.00,
    seller_id: 2
)
if !product22.photo.attached?
    product22.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass4.jpg"), filename: "22.jpg")
end

product23 = Product.create!(
    product_name: 'Glasses',
    description: 'Ray Ban Wayfarer Black Classic Sunglasses - 901 RB2140 - 50mm 54mm',
    category_id:4,
    price: 59.99,
    seller_id: 2
)
if !product23.photo.attached?
    product23.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass5.jpg"), filename: "23.jpg")
end

product24 = Product.create!(
    product_name: 'Glasses',
    description: 'New Rayban Tortoise Brown Clubmaster Sunglasses Ray Ban',
    category_id:4,
    price: 28.00,
    seller_id: 2
)
if !product24.photo.attached?
    product24.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass7.jpg"), filename: "24.jpg")
end

product25 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Men Running Shoes Non Slip Shoes Breathable Lightweight Sneakers Slip Resistant Athletic Sports Walking Gym Work Shoes',
    category_id:5,
    price: 200.00,
    seller_id: 6
)
if !product25.photo.attached?
    product25.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe1.jpg"), filename: "25.jpg")
end
product26 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'adidas Women Grand Court Sneaker',
    category_id:5,
    price: 64.95,
    seller_id: 6
)
if !product26.photo.attached?
    product26.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe.jpg"), filename: "26.jpg")
end

product27 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike womens Running shoes. Orange and white',
    category_id:5,
    price: 102.67,
    seller_id: 6
)
if !product27.photo.attached?
    product27.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe2.jpg"), filename: "27.jpg")
end

product28 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Mens Free RN Flyknit Running Shoe',
    category_id:5,
    price: 79.00,
    seller_id: 7
)
if !product28.photo.attached?
    product28.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe3.jpg"), filename: "28.jpg")
end

product29 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Jordan 1 Mid Igloo Mens 554724-132',
    category_id:5,
    price: 169.95,
    seller_id: 7
)
if !product29.photo.attached?
    product29.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe4.jpg"), filename: "29.jpg")
end

product30 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Air Max 270',
    category_id:5,
    price: 150.00,
    seller_id: 7
)
if !product30.photo.attached?
    product30.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe5.jpg"), filename: "30.jpg")
end

product31 = Product.create!(
    product_name: 'Soccer Ball',
    description: 'FC Barcelona Authentic Official Licensed Soccer Ball Size 5 - 11-2',
    category_id:6,
    price: 20.99,
    seller_id: 7
)
if !product31.photo.attached?
    product31.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ball1.jpg"), filename: "31.jpg")
end

product32 = Product.create!(
    product_name: 'Hot Wheels',
    description: 'Jada Toys Fast & Furious F9 1:24 1968 Dodge Charger Widebody Die-cast Car, Toys for Kids and Adults',
    category_id:6,
    price: 8.99,
    seller_id: 7
)
if !product32.photo.attached?
    product32.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/car5.jpg"), filename: "32.jpg")
end

product33 = Product.create!(
    product_name: 'Dog Toys',
    description: 'Classic Goodie Bone Dog Toy',
    category_id:6,
    price: 14.99,
    seller_id: 7
)
if !product33.photo.attached?
    product33.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/dogt3.jpg"), filename: "33.jpg")
end

product34 = Product.create!(
    product_name: 'Action figures',
    description: 'Marvel Guardians of The Galaxy Groot Ravager Outfit Action Figure',
    category_id:6,
    price: 22.95,
    seller_id: 8
)
if !product34.photo.attached?
    product34.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/action5.jpg"), filename: "34.jpg")
end

product35 = Product.create!(
    product_name: 'Baby Puzzles',
    description: 'Fisher-Price Giant Rock-a-Stack',
    category_id:6,
    price: 15.97,
    seller_id: 7
)
if !product35.photo.attached?
    product35.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/puzzle2.jpg"), filename: "35.jpg")
end

product36 = Product.create!(
    product_name: 'Soft Toys',
    description: 'Fluffuns Teddy Bear Plush - Cute Teddy Bears Stuffed Animals in 3 Colors - 3-Pack of Stuffed Bears - 9 Inch Height (Dark Brown, Golden, White)',
    category_id:6,
    price: 25.88,
    seller_id: 8
)
if !product36.photo.attached?
    product36.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/teddy1.jpg"), filename: "36.jpg")
end