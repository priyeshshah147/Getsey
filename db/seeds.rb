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
    username: 'Vital',
    email: 'vital@gmail.com',
    password: 'password'    
)

user6 = User.create!(
    username: 'Happy Gifts',
    email: 'happygifts@gmail.com',
    password: 'password'    
)

user7 = User.create!(
    username: 'Luka Luka',
    email: 'lukaluka@gmail.com',
    password: 'password'    
)
user8 = User.create!(
    username: 'Game Stopper',
    email: 'gamestopper@gmail.com',
    password: 'password'    
)

user9 = User.create!(
    username: 'Awesome Products',
    email: 'awesome_products@gmail.com',
    password: 'password'    
)
user10 = User.create!(
    username: 'Leatherman',
    email: 'leatherman@gmail.com',
    password: 'password'    
)

user11 = User.create!(
    username: 'Morning Joy Co',
    email: 'morningjoy.co@gmail.com',
    password: 'password'    
)



product1 = Product.create!(
    product_name: 'SCHAFFHAUSEN,  mens watch, mechanical wristWatch, vintage watch, vintage watch Pobeda, soviet watch, gift for men',
    description: 'Size (from lug to lug): 42 mm *
    Case Diameter (with crown): 35 mm *
    Case Diameter (without crown): 33 mm *
    Watch crystal diameter: 30mm *
    Thickness: 10 mm *
    Strap color: Light Brown',
    category_id:1,
    price: 299.99,
    seller_id: user5.id
)

if !product1.photo.attached?
    product1.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch.jpg"), filename: "1.jpg")
end
product2 = Product.create!(
    product_name: 'Engraved Ladies Watch Personalised Rose Gold Quartz Metal Watch Gem Dial Date Function and Gift Box',
    description: "The COLUMN Rose watch. Designed and hand assembled in Britain's Jewellery Quarter to expert horological specifications. The watch contains high quality quartz movement to ensure reliability. On the back is a premium stainless steel case-back to ensure everyone even those with sensitive skin can enjoy this watch at all times. The case-back can be engraved with any image, text or both of your choosing making this watch the perfect gift for a loved one for any occasion.
    The watch has a high water-resistance threshold, meaning you can go about your daily routine without needing to worry about getting it wet. It is not recommended that you bathe or swim with the watch.
    Also, the watch comes with a 24 Month (2 Year) Repair Warranty protecting against any mechanical malfunction of the watch. If something goes wrong, we'll make it right.",
    category_id:1,
    price: 19.99,
    seller_id: user5.id
)
if !product2.photo.attached?
    product2.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch1.jpg"), filename: "2.jpg")
end
product3 = Product.create!(
    product_name: 'Mi Band ',
    description: 'Xiaomi Watch Strap - Mi band 6,5,4,3 Strap Nylon Sport loop watch Belt Pulsera correa Miband - Hyper Grape',
    category_id:1,
    price: 45.99,
    seller_id: user5.id
)
if !product3.photo.attached?
    product3.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch2.jpg"), filename: "3.jpg")
end
product4 = Product.create!(
    product_name: 'Tissot - Excellent 35mm Original!',
    description: 'Certified Watchmaker of Gem City College, School of Horology *
    All timepieces come thoroughly serviced by WierClock *
    Service available for your existing timepiece *
    Completely Overhauled cal.27 B-21 Movement *
    17 Jewels *
    Shock Protected *
    Solid Stainless Steel 35mm Case *
    New 18mm Saddle Stitched Leather Strap *
    Excellent Original Dial & Hands *
    New Tension Ring Crystal',
    category_id:1,
    price: 149.99,
    seller_id: user5.id 
)
if !product4.photo.attached?
    product4.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch3.jpg"), filename: "4.jpg")
end
product5 = Product.create!(
    product_name: 'Omega 1969s Seamaster Winding Date Mens Vintage Steel Watch',
    description: "Title: Omega 1969s Seamaster Winding Date red Dial Men's Vintage Steel Watch *
    Condition: Old Pre-owned Watch Restored & Serviced *
    Dial: Repainted Red color dial, Luminous Index, Steel with Orange Hands *
    Case: Stainless Steel Case. 136.018 *
    Case size: 34mm in width without crown and 40mm",
    category_id:1,
    price: 131.50,
    seller_id: user5.id
)
if !product5.photo.attached?
    product5.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch4.jpg"), filename: "5.jpg")
end
product6 = Product.create!(
    product_name: 'DW',
    description: 'Daniel Wellington Classy Brown & Silver Toned Wristwatch w/ Adjustable Band',
    category_id:1,
    price: 7.50,
    seller_id: user5.id
)
if !product6.photo.attached?
    product6.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/watch5.jpg"), filename: "6.jpg")
end
product7 = Product.create!(
    product_name: 'Wallet',
    description: 'Koi Fish personalized men wallet, custom gift for men, animal wallet for him, anniversary gift, Father Day gift idea for him 2021',
    category_id:2,
    price: 25.99,
    seller_id: user6.id
)
if !product7.photo.attached?
    product7.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet1.jpg"), filename: "7.jpg")
end
product8 = Product.create!(
    product_name: 'Wallet',
    description: 'PU personalized men wallet, custom gift for men, animal wallet for him, anniversary gift, Father Day gift idea for him 2021',
    category_id:2,
    price: 19.99,
    seller_id: user6.id
)
if !product8.photo.attached?
    product8.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet2.jpg"), filename: "8.jpg")
end
product9 = Product.create!(
    product_name: 'Wallet',
    description: 'Cool style for summer',
    category_id:2,
    price: 15.60,
    seller_id: user6.id
)
if !product9.photo.attached?
    product9.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet3.jpg"), filename: "9.jpg")
end
product10 = Product.create!(
    product_name: 'Wallet',
    description: 'Highquality heaphones, the best you can ever get',
    category_id:2,
    price: 200.00,
    seller_id: user6.id
)
if !product10.photo.attached?
    product10.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet4.jpg"), filename: "10.jpg")
end
product11 = Product.create!(
    product_name: 'Wallet',
    description: 'You can`t go wrong with black wallet, very fine and good looking',
    category_id:2,
    price: 15.60,
    seller_id: user6.id
)
if !product11.photo.attached?
    product11.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet5.jpg"), filename: "11.jpg")
end

product12 = Product.create!(
    product_name: 'wallet',
    description: 'Style is nothing without a class, so is a man without a waller... nothing',
    category_id:2,
    price: 100.51,
    seller_id: user6.id
)
if !product12.photo.attached?
    product12.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/wallet6.jpg"), filename: "12.jpg")
end
product13 = Product.create!(
    product_name: 'Ring',
    description: 'Rose Gold Tungsten Ring Men Women Wedding Band Beveled Edge Grey Brushed Design 6MM Size 5 6 7 8 9 10 11 12 13 14 Anniversary Love Gift',
    category_id:3,
    price: 259.99,
    seller_id: user7.id
)
if !product13.photo.attached?
    product13.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring1.jpg"), filename: "13.jpg")
end
product14 = Product.create!(
    product_name: 'Ring',
    description: 'Highquality titanium ring, the best you can ever get',
    category_id:3,
    price: 200.00,
    seller_id: user6.id
)
if !product14.photo.attached?
    product14.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring2.jpg"), filename: "14.jpg")
end
product15 = Product.create!(
    product_name: 'Ring',
    description: 'Casual ring. stylish and affordable',
    category_id:3,
    price: 15.60,
    seller_id: user6.id
)
if !product15.photo.attached?
    product15.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring3.jpg"), filename: "15.jpg")
end

product16 = Product.create!(
    product_name: 'Ring',
    description: 'Tungsten Carbide Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 100.51,
    seller_id: user6.id
)
if !product16.photo.attached?
    product16.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring4.jpg"), filename: "16.jpg")
end

product17 = Product.create!(
    product_name: 'Ring',
    description: 'Stainless Steel Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 15.99,
    seller_id: user6.id
)
if !product17.photo.attached?
    product17.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring6.jpg"), filename: "17.jpg")
end
product18 = Product.create!(
    product_name: 'Ring',
    description: 'Diamond Wedding Ring Comfort 6mm or 8mm widths available',
    category_id:3,
    price: 999.99,
    seller_id: user6.id
)
if !product18.photo.attached?
    product18.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ring7.jpg"), filename: "18.jpg")
end
product19 = Product.create!(
    product_name: 'Glasses',
    description: 'Steampunk Round, Blue Reflective, Sunglasses, Unisex, Trendy, Retro, Urban, Hippie, Steampunk, Cool, Vintage Style, Unisex, Steampunk Hip',
    category_id:4,
    price: 19.95,
    seller_id: user7.id
)
if !product19.photo.attached?
    product19.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass1.jpg"), filename: "19.jpg")
end

product20 = Product.create!(
    product_name: 'Glasses',
    description: 'Brooklyn, (Bling) Reading Glasses for Women W (Hematite + L. Colorado) Genuine European Crystals. +1.25..+3 Square. NY Fifth Avenue',
    category_id:4,
    price: 29.95,
    seller_id: user7.id
)
if !product20.photo.attached?
    product20.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass2.jpg"), filename: "20.jpg")
end

product21 = Product.create!(
    product_name: 'Glasses',
    description: '90s Square Sunglasses Vintage Inspired , Black Glasses, Orange, Pink, Yellow, Red Lenses, Plastic Frame, Women, Men, Unisex',
    category_id:4,
    price: 14.95,
    seller_id: user7.id
)
if !product21.photo.attached?
    product21.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass3.jpg"), filename: "21.jpg")
end

product22 = Product.create!(
    product_name: 'Glasses',
    description: 'Golden Boy 1970s Wire Rim Aviator Glasses – Mens Wire Frame Aviator Sunglasses – Shiny Gold Aviator Sunglasses – Old Stock Golden Aviators',
    category_id:4,
    price: 66.00,
    seller_id: user7.id
)
if !product22.photo.attached?
    product22.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass4.jpg"), filename: "22.jpg")
end

product23 = Product.create!(
    product_name: 'Glasses',
    description: 'Ray Ban Wayfarer Black Classic Sunglasses - 901 RB2140 - 50mm 54mm',
    category_id:4,
    price: 59.99,
    seller_id: user7.id
)
if !product23.photo.attached?
    product23.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass5.jpg"), filename: "23.jpg")
end

product24 = Product.create!(
    product_name: 'Glasses',
    description: 'New Rayban Tortoise Brown Clubmaster Sunglasses Ray Ban',
    category_id:4,
    price: 28.00,
    seller_id: user7.id
)
if !product24.photo.attached?
    product24.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/glass7.jpg"), filename: "24.jpg")
end

product25 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Men Running Shoes Non Slip Shoes Breathable Lightweight Sneakers Slip Resistant Athletic Sports Walking Gym Work Shoes',
    category_id:5,
    price: 200.00,
    seller_id: user8.id
)
if !product25.photo.attached?
    product25.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe1.jpg"), filename: "25.jpg")
end
product26 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'adidas Women Grand Court Sneaker',
    category_id:5,
    price: 64.95,
    seller_id: user8.id
)
if !product26.photo.attached?
    product26.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe.jpg"), filename: "26.jpg")
end

product27 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike womens Running shoes. Orange and white',
    category_id:5,
    price: 102.67,
    seller_id: user8.id
)
if !product27.photo.attached?
    product27.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe2.jpg"), filename: "27.jpg")
end

product28 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Mens Free RN Flyknit Running Shoe',
    category_id:5,
    price: 79.00,
    seller_id: user8.id
)
if !product28.photo.attached?
    product28.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe3.jpg"), filename: "28.jpg")
end

product29 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Jordan 1 Mid Igloo Mens 554724-132',
    category_id:5,
    price: 169.95,
    seller_id: user8.id
)
if !product29.photo.attached?
    product29.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe4.jpg"), filename: "29.jpg")
end

product30 = Product.create!(
    product_name: 'Sport Shoes',
    description: 'Nike Air Max 270',
    category_id:5,
    price: 150.00,
    seller_id: user8.id
)
if !product30.photo.attached?
    product30.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/shoe5.jpg"), filename: "30.jpg")
end

product31 = Product.create!(
    product_name: 'FC Barcelona Authentic Official Licensed Soccer Ball Size 5 - 11-2',
    description: 'Support you favorite team! Best for Collection Display or Play*
    Official license Soccer Team Merchandise Product*
    Many different unique designs and colors for your collection display or play. Find one that fits your style and/or taste*
    Designed and Created by Icon Sports Group*
    Official Size 5, Balls shipped DEFLATED since Brand new form box. Buyer need get a needle re-inflation.',
    category_id:6,
    price: 20.99,
    seller_id: user9.id
)
if !product31.photo.attached?
    product31.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/ball1.jpg"), filename: "31.jpg")
end

product32 = Product.create!(
    product_name: 'Fast & Furious F9 1:24 1968 Dodge Charger Widebody Die-cast Car, Toys for Kids and Adults',
    description: "Check out this exceptional replica of one of Dom's favorites from the Fast & Furious franchise! Dom's 1970 Dodge Charger With Engine Blower Hard Top is a 1/32 scale diecast model replica. It comes in black and features free wheel action. It's a brilliant selection for any Hollywood movie car collection, and a real gem for devoted Fast & Furious enthusiasts!
    Quality Diecast Car",
    category_id:6,
    price: 17.99,
    seller_id: user9.id
)
if !product32.photo.attached?
    product32.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/car5.jpg"), filename: "32.jpg")
end

product33 = Product.create!(
    product_name: 'Classic Goodie Bone Dog Toy',
    description: "Give your furry friend a challenge with the KONG Goodie Bone Dog Toy. The answer to dogs that love a classic bone shape but need a safe and strong rubber toy. Each end of the bone features two Goodie Grippers for pet parents to fill with KONG Snacks or Stuff’N Easy Treat for extended play sessions. Keep your pup occupied and happy with KONG Goodie Bone Dog Toy.*
    *-Available in three sizes: Small, Medium and Large, so that you can pick the perfect size for your pup.
    *-Made from KONG durable rubber that is long-lasting and soft on your dog's teeth and gums.
    *-Perfect for stuffing with KONG Stuff'N or Easy Treat paste.
    *-Treat dispensing toy provides a mentally stimulating puzzle for average chewers.
    *-Recommended by vets worldwide as a safe toy for active dogs",
    category_id:6,
    price: 14.99,
    seller_id: user9.id
)
if !product33.photo.attached?
    product33.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/dogt3.jpg"), filename: "33.jpg")
end

product34 = Product.create!(
    product_name: 'Marvel Guardians of The Galaxy Groot Ravager Outfit Action Figure',
    description: "When Groot is captured by a Ravager faction and unwillingly suited up as their mascot, he sets out to take revenge thats well worth rooting for. Imagine tagging along with Groot with this 11.5-inch Groot figure, featuring the Ravager outfit from the upcoming Guardians of the Galaxy: Volume 2 film. With this fun, movie-inspired figure, kids can imagine stretching their branches alongside Groot and joining him on awesome intergalactic adventures!",
    category_id:6,
    price: 22.95,
    seller_id: user9.id
)
if !product34.photo.attached?
    product34.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/action5.jpg"), filename: "34.jpg")
end

product35 = Product.create!(
    product_name: 'Fisher-Price Giant Rock-a-Stack',
    description:"-The classic Fisher-Price stacking toy gets supersizedover 14 inches tall!*
    -6 colorful rings for your baby to grasp, shake, stack, and explore*
    -Shake the top ring for fun rattle sounds*
    -Wobbly, bat-at base*
    -For babies ages 12 months and older" ,
    category_id:6,
    price: 15.97,
    seller_id: user9.id
)
if !product35.photo.attached?
    product35.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/puzzle2.jpg"), filename: "35.jpg")
end

product36 = Product.create!(
    product_name: 'Fluffuns Teddy Bear Plush - Cute Teddy Bears Stuffed Animals in 3 Colors - 3-Pack of Stuffed Bears - 9 Inch Height (Dark Brown, Golden, White)',
    description: "Teddy bear stuffed animal
    Soft, adorable, cute, huggable, cuddly and premium quality
    Available in 3 colors: light brown/tan, white and brown bears
    Intended for ages 2+
    9 inch height stuffed bear",
    category_id:6,
    price: 25.88,
    seller_id: user9.id
)
if !product36.photo.attached?
    product36.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/teddy1.jpg"), filename: "36.jpg")
end

product37 = Product.create!(
    product_name: "Custom Mixing Bowl with Handwritten Family Recipe - Recipe Dish - Large Ceramic Kitchen Bowl with Custom Recipe - Heirloom Gifts",
    description: "This mixing bowl is a unique gift for mom, dad, grandma, grandpa, and/or friends that love to cook and bake. This large bowl is made out of earthenware clay and glazed with a glossy finish and it can have a favorite family recipe added on the front of the bowl. This bowl measures approximately 10.75' x 10.75' x 5'.",
    category_id:7,
    price: 164.99,
    seller_id: user9.id
)
if !product37.photo.attached?
    product37.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home1.JPG"), filename: "37.jpg")
end

product38 = Product.create!(
    product_name: "Scallop shell terrazzo vase",
    description: "A scallop shell vase in dusky pink terrazzo eco resin perfect for dried grasses or flowers.

    *All handmade in an eco resin with terrazzo, hand sanded and finished. Each vase can hold either dried grasses or water and a bud stem or wild flowers.
    
    *Made from a pinky terracotta eco resin and full of terrazzo crushed recycled shell and black and white flecks.
    
    *The vase has a glass attachment to the back, this is attached using recycled vegetable tanned waste leather from a fabulous local maker Wild Origin based near my studio in Cornwall.
    
    *12cm x 11cm x 4cm - approx as each one is hand sanded.",
    category_id:7,
    price: 45.45,
    seller_id: user9.id
)
if !product38.photo.attached?
    product38.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home2.JPG"), filename: "38.jpg")
end

product39 = Product.create!(
    product_name: "Leather Strap Wine Rack // Free Gift Wrapping // Leather Home Accessories // Leather Wall Hanging Strap // Leather Hanging Storage",
    description: "The leather strap will be a good addition to give your interior a new look. They can be used in many ways, you can use it like a Wine Rack , magazine rack , towel rack in the kitchen or bathroom . Use two leather wall hooks plus driftwood to hang larger items such as towels, fabric storage, or even as a curtain rod hanger.

    *- I use vegetable leather tanned with bronze hardware
    
    *- You can choose the color of the product from such options: Natural , Tan and Black.
    
    *- You can also choose the design of the strap from such options : Oblique , Flat and Round .",
    category_id:7,
    price: 23.70,
    seller_id: user9.id
)
if !product39.photo.attached?
    product39.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home3.JPG"), filename: "39.jpg")
end

product40 = Product.create!(
    product_name: "Amanita muscaria mushroom spoon rest Ceramic utensil holder Mushroom lover gift",
    description: "Ceramic Amanita muscaria mushroom spoon rest for the home in a Woodland-style (perfect gift for the woman).

    *- Dimensions:
    
    *Ceramic Amanita muscaria mushroom spoon rest: 7.7'' * 4.7 '' (20 * 12 cm)",
    category_id:7,
    price: 31.50,
    seller_id: user9.id
)
if !product40.photo.attached?
    product40.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home4.JPG"), filename: "40.jpg")
end

product41 = Product.create!(
    product_name: "Custom Hand Cut Map Artwork, 11x14, 16x20 or 22x30. NOV completion.",
    description: "This listing is for one ORIGINAL Hand Cut Map, by the paper cutting artist, Karen O'Leary.
    Please list a city, or specific address to be mapped in your order (Any City or Any location is possible) and I'll create a custom Hand Cut Map for you.
    
    *Choose your size at checkout.
    Map will be hand cut from white watercolor paper (acid-free, archival, 90 lb., textured surface)
    Framing not included.
    
    *The exact coverage area will be emailed for approval 1-2 weeks after the order is placed and paid for.",
    category_id:7,
    price: 400.00,
    seller_id: user9.id
)
if !product41.photo.attached?
    product41.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home5.JPG"), filename: "41.jpg")
end

product42 = Product.create!(
    product_name: "Recipe Cutting Board | Personalized Engraved Custom Cutting Board | Kitchen Decor | Christmas Gift | Birthday | Housewarming | Wedding",
    description: "- Wood Options: Hickory (Photo 1); Maple (Photo 2); Cherry (Photo 3); Sapele (Photo 4).

    *- Size: 16” x 9”, including handle.
    
    *- All wood products are naturally rustic, each with their own unique accents. Cutting boards are made of 100% natural wood. No two boards will be exactly alike due to natural variations in grain patterns and tones.
    
    *- All cutting boards are treated with food-safe Walrus Oil, although boards should be used for decor only to preserve the engraving.
    
    *- Recipes may also be typed.
    
    *- Two-sided board engravings also available for multiple recipes or long recipes.",
    category_id:7,
    price: 69.00,
    seller_id: user9.id
)
if !product42.photo.attached?
    product42.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home6.JPG"), filename: "42.jpg")
end

product43 = Product.create!(
    product_name: "Children's Chair Rainbow, Personalized High Chair, Kids Table and Chair, Kindergarten Furniture, Wooden Chair Toddler, Children's Furniture Set",
    description: "- Robust, pastel-colored rainbow chair on which your little darling can sit child-friendly
    *- Customizable with the name of the child
    *- High-quality production of joiner's hand
    *- Material: Solid wood, paint and varnish: non-toxic certified
    *- Product dimensions: width: 27 cm, depth: 29 cm, height: 53 cm, seat height: 30 cm, weight approx. 2.7 kg
    *- Suitable for children aged 2 to about 5 years
    *- matching children's table (50 x 50 cm) is optional (see set: 1 chair and 1 table)! The table is in white, matt lacquered. With the set there is the personalization for free!",
    category_id:7,
    price: 215.74,
    seller_id: user9.id
)
if !product43.photo.attached?
    product43.photo.attach(io: URI.open("https://getsey2-seeds.s3.us-east-2.amazonaws.com/home7.JPG"), filename: "43.jpg")
end