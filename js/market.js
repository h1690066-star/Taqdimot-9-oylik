// ==========================================
// 1. MAHSULOTLAR BAZASI
// ==========================================
let catalogProducts = [
  {
    id: 1,
    title: "Premium Noise Cancelling Headphones - XM Series",
    basePrice: 1850000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    title: "Studio Master Black Edition - High Fidelity 5.0 Wireless",
    basePrice: 1240000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
  },
  {
    id: 3,
    title: "Imperial Gold Series - True Wireless Earbuds Gen 2",
    basePrice: 1420000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
  },
  {
    id: 4,
    title: "Ultra-Thin Gaming Laptop Intel i7 / 16GB RAM",
    basePrice: 9500000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
  },
  {
    id: 5,
    title: "Luxe Edition Urban Sneakers - 2024 Collection",
    basePrice: 680000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 6,
    title: "Oversized Minimalist Cotton Hoodie - Street Style",
    basePrice: 320000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80",
  },
  {
    id: 7,
    title: "Smart Watch Ultra - AMOLED Display & Health Tracker",
    basePrice: 550000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 8,
    title: "Ergonomic Office Chair - Breathable Mesh Support",
    basePrice: 1450000,
    platform: "1688",
    category: "Mebel",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=500&q=80",
  },
  {
    id: 9,
    title: "Mechanical Gaming Keyboard - RGB Backlit Blue Switch",
    basePrice: 420000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
  },
  {
    id: 10,
    title: "Wireless Vertical Ergonomic Mouse - Rechargeable",
    basePrice: 180000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80"
  },
  {
    id: 11,
    title: "Pro Workstation Laptop Pro 15.6 Inch - Core i9",
    basePrice: 12500000,
    platform: "Alibaba",
    category: "Noutbuklar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
  },
  {
    id: 12,
    title: "Vintage Denim Jacket - Oversized Streetwear Edition",
    basePrice: 380000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80"
  },
  {
    id: 13,
    title: "Classic Leather Minimalist Wallet - RFID Blocking",
    basePrice: 120000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80"
  },
  {
    id: 14,
    title: "Modern Standing Desk - Electric Height Adjustable",
    basePrice: 2800000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80"
  },
  {
    id: 15,
    title: "4K Action Camera Waterproof - Wide Angle Lens",
    basePrice: 890000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 16,
    title: "Casual Running Shoes - Breathable Mesh Sole",
    basePrice: 290000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
  },
  {
    id: 17,
    title: "Portable Power Bank 20000mAh - Fast Charging 22.5W",
    basePrice: 230000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1609592424009-580668b51d14?w=500&q=80"
  },
  {
    id: 18,
    title: "Polarized UV400 Sunglasses - Vintage Square Frame",
    basePrice: 95000,
    platform: "Taobao",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
  },
  {
    id: 19,
    title: "Ultra-Lightweight Student Laptop 14 Inch - Ryzen 5",
    basePrice: 5400000,
    platform: "Pinduoduo",
    category: "Noutbuklar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"
  },
  {
    id: 20,
    title: "Nordic Minimalist Lounge Chair - Soft Velvet Fabric",
    basePrice: 1100000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80"
  },
  {
    id: 21,
    title: "Sports Fitness Smartband - Heart Rate & Sleep Monitor",
    basePrice: 190000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80"
  },
  {
    id: 22,
    title: "Winter Puffer Jacket - Windproof Waterproof Outerwear",
    basePrice: 580000,
    platform: "Alibaba",
    category: "Kiyimlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500&q=80"
  },
  {
    id: 23,
    title: "Studio Condenser Microphone - USB Plug & Play",
    basePrice: 340000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80"
  },
  {
    id: 24,
    title: "Minimalist Wood Coffee Table - Living Room Essential",
    basePrice: 850000,
    platform: "1688",
    category: "Mebel",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80"
  },
  {
    id: 25,
    title: "Business Laptop Backpack - Anti-Theft Water Resistant",
    basePrice: 210000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  },
  {
    id: 26,
    title: "27-Inch 4K Gaming Monitor - 144Hz IPS Panel",
    basePrice: 3200000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"
  },
  {
    id: 27,
    title: "Slim Fit Cotton Chino Pants - Business Casual",
    basePrice: 240000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80"
  },
  {
    id: 28,
    title: "Foldable Laptop Stand - Aluminum Cooling Holder",
    basePrice: 110000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  },
  {
    id: 29,
    title: "Dual-Driver Bluetooth Speaker - Heavy Bass Portable",
    basePrice: 390000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
  },
  {
    id: 30,
    title: "Bookshelf Display Rack - Industrial Metal & Wood",
    basePrice: 1350000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80"
  },
  {
    id: 31,
    title: "Convertible 2-in-1 Touchscreen Laptop - 13.3 Inch",
    basePrice: 7800000,
    platform: "Alibaba",
    category: "Noutbuklar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80"
  },
  {
    id: 32,
    title: "Luxury Quartz Wristwatch - Stainless Steel Strap",
    basePrice: 480000,
    platform: "Taobao",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80"
  },
  {
    id: 33,
    title: "Casual Printed Hawaiian Shirt - Summer Edition",
    basePrice: 150000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
  },
  {
    id: 34,
    title: "Noise Cancelling Lavalier Microphone - Wireless",
    basePrice: 270000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=500&q=80"
  },
  {
    id: 35,
    title: "Ergonomic Memory Foam Seat Cushion - Office & Car",
    basePrice: 160000,
    platform: "1688",
    category: "Mebel",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80"
  },
  {
    id: 36,
    title: "HD Web Camera 1080P - Built-in Microphone",
    basePrice: 195000,
    platform: "Pinduoduo",
    category: "Gadjetlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80"
  },
  {
    id: 37,
    title: "Leather Crossbody Shoulder Bag - Vintage Style",
    basePrice: 310000,
    platform: "Taobao",
    category: "Aksessuarlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80"
  },
  {
    id: 38,
    title: "Creator Series Laptop 17 Inch - RTX 4060 GPU",
    basePrice: 14200000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80"
  },
  {
    id: 39,
    title: "Athletic Training Shorts - Quick Dry Fabric",
    basePrice: 110000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80"
  },
  {
    id: 40,
    title: "Smart LED Desk Lamp - Touch Control & Wireless Charger",
    basePrice: 280000,
    platform: "1688",
    category: "Mebel",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&q=80"
  },
  {
    id: 41,
    title: "High Precision Digital Drawing Tablet - Stylus Pen",
    basePrice: 620000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80"
  },
  {
    id: 42,
    title: "Thermal Winter Gloves - Touchscreen Compatible",
    basePrice: 75000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=500&q=80"
  },
  {
    id: 43,
    title: "Minimalist Soft Fabric Sofa - 3 Seater Living Room",
    basePrice: 4200000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
  },
  {
    id: 44,
    title: "Women's Elegant Trench Coat - Belted Classic",
    basePrice: 490000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
  },
  {
    id: 45,
    title: "Fast Wireless Charger Pad - 15W Qi Certified",
    basePrice: 130000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1622445268465-84fe5d685735?w=500&q=80"
  },
  {
    id: 46,
    title: "Chromebook 11.6 Inch - Lightweight Educational Laptop",
    basePrice: 2300000,
    platform: "Alibaba",
    category: "Noutbuklar",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80"
  },
  {
    id: 47,
    title: "Casual Canvas Belt - Heavy Duty Metal Buckle",
    basePrice: 65000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80"
  },
  {
    id: 48,
    title: "Retro Mechanical Typewriter Keyboard - Bluetooth",
    basePrice: 750000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
  },
  {
    id: 49,
    title: "Adjustable Shoe Rack Organizer - 5 Tier Storage",
    basePrice: 220000,
    platform: "1688",
    category: "Mebel",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80"
  },
  {
    id: 50,
    title: "High-Waisted Fitness Leggings - Push Up Seamless",
    basePrice: 165000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506629082925-23914560a827?w=500&q=80"
  },
  {
    id: 51,
    title: "Over-Ear Wireless Gaming Headset - 7.1 Surround Sound",
    basePrice: 510000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80"
  },
  {
    id: 52,
    title: "Business Executive Leather Briefcase - Attache Case",
    basePrice: 670000,
    platform: "Alibaba",
    category: "Aksessuarlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  },
  {
    id: 53,
    title: "Cotton Crewneck Sweatshirt - Solid Color Basic",
    basePrice: 190000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
  },
  {
    id: 54,
    title: "Portable Mini Projector 1080P Supported - Home Theater",
    basePrice: 920000,
    platform: "Pinduoduo",
    category: "Gadjetlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 55,
    title: "Ultra-Light Carbon Fiber Laptop 13 Inch",
    basePrice: 11000000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
  },
  {
    id: 56,
    title: "Minimalist Wall Mounted Floating Shelves - Set of 3",
    basePrice: 140000,
    platform: "1688",
    category: "Mebel",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80"
  },
  {
    id: 57,
    title: "Automatic Mechanical Skeleton Watch - Leather Strap",
    basePrice: 890000,
    platform: "Alibaba",
    category: "Aksessuarlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80"
  },
  {
    id: 58,
    title: "High-Capacity Travel Duffel Bag - Waterproof Nylon",
    basePrice: 260000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  },
  {
    id: 59,
    title: "RGB Gaming Desk Pad - XXL Mouse Pad Waterproof",
    basePrice: 135000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80"
  },
  {
    id: 60,
    title: "Portable Mini Bluetooth Thermal Printer - Pocket Label",
    basePrice: 280000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 61,
    title: "Casual High-Waisted Wide Leg Denim Jeans",
    basePrice: 270000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80"
  },
  {
    id: 62,
    title: "Solid Oak Wood Dining Table - 4 Person Capacity",
    basePrice: 3200000,
    platform: "Alibaba",
    category: "Mebel",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80"
  },
  {
    id: 63,
    title: "Gaming Laptop AMD Ryzen 7 / 32GB RAM / 1TB SSD",
    basePrice: 11800000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
  },
  {
    id: 64,
    title: "Magnetic Wireless Power Bank 10000mAh for iPhone",
    basePrice: 210000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1609592424009-580668b51d14?w=500&q=80"
  },
  {
    id: 65,
    title: "Men's Waterproof Outdoor Hiking Shoes",
    basePrice: 420000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
  },
  {
    id: 66,
    title: "Minimalist Metal Bed Frame - Queen Size Black",
    basePrice: 1850000,
    platform: "1688",
    category: "Mebel",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80"
  },
  {
    id: 67,
    title: "Ultra-Fine Point Stylus Pen for iPad and Android",
    basePrice: 115000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80"
  },
  {
    id: 68,
    title: "Compact Mechanical Numpad - Custom Macro Keys",
    basePrice: 195000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
  },
  {
    id: 69,
    title: "Slim Business Ultrabook 13.3 - IPS Touch Screen",
    basePrice: 8200000,
    platform: "Alibaba",
    category: "Noutbuklar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
  },
  {
    id: 70,
    title: "Women's Oversized Knit Cardigan Sweater",
    basePrice: 230000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
  },
  {
    id: 71,
    title: "Adjustable Monitor Arm Mount - Single Gas Spring",
    basePrice: 310000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"
  },
  {
    id: 72,
    title: "High-Power Car Vacuum Cleaner - Cordless 120W",
    basePrice: 175000,
    platform: "Pinduoduo",
    category: "Gadjetlar",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80"
  },
  {
    id: 73,
    title: "Luxury Velvet Accent Chair with Gold Legs",
    basePrice: 980000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80"
  },
  {
    id: 74,
    title: "Pure Cotton Crew Socks Pack of 5 - Athletic Sport",
    basePrice: 45000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
  },
  {
    id: 75,
    title: "Professional Studio Monitor Headphones - Closed Back",
    basePrice: 950000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 76,
    title: "Classic Leather Men's Belt - Automatic Buckle",
    basePrice: 98000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80"
  },
  {
    id: 77,
    title: "Lightweight Student College Backpack - Waterproof",
    basePrice: 165000,
    platform: "Taobao",
    category: "Aksessuarlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  },
  {
    id: 78,
    title: "Ergonomic Mesh Gaming Chair with Footrest",
    basePrice: 1680000,
    platform: "1688",
    category: "Mebel",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=500&q=80"
  },
  {
    id: 79,
    title: "Entry-Level Budget Laptop 15.6 - Celeron N5100",
    basePrice: 3400000,
    platform: "Pinduoduo",
    category: "Noutbuklar",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"
  },
  {
    id: 80,
    title: "Smart RGB LED Light Strip 10M - Tuya App Control",
    basePrice: 125000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&q=80"
  },
  {
    id: 81,
    title: "Men's Waterproof Windbreaker Jacket - Sport Active",
    basePrice: 290000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500&q=80"
  },
  {
    id: 82,
    title: "Multi-Functional Cable Organizer Storage Box",
    basePrice: 55000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  },
  {
    id: 83,
    title: "HD USB Digital Microscope 1000x Magnification",
    basePrice: 240000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 84,
    title: "Modern Round Coffee Table with Storage Shelf",
    basePrice: 720000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80"
  },
  {
    id: 85,
    title: "Women's Canvas Casual Tote Bag - Eco Friendly",
    basePrice: 85000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80"
  },
  {
    id: 86,
    title: "Seamless Workout Sports Bra - Medium Support",
    basePrice: 110000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506629082925-23914560a827?w=500&q=80"
  },
  {
    id: 87,
    title: "External Portable SSD 1TB - USB 3.2 High Speed",
    basePrice: 890000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80"
  },
  {
    id: 88,
    title: "Nordic Floor Lamp - Modern Corner Standing Light",
    basePrice: 380000,
    platform: "1688",
    category: "Mebel",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&q=80"
  },
  {
    id: 89,
    title: "Convertible Travel Garment Bag - Suit Carrier",
    basePrice: 340000,
    platform: "Alibaba",
    category: "Aksessuarlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  },
  {
    id: 90,
    title: "Lightweight Trail Running Sneakers",
    basePrice: 360000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
  },
  {
    id: 91,
    title: "Dual Bay USB 3.0 Hard Drive Docking Station",
    basePrice: 290000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80"
  },
  {
    id: 92,
    title: "Executive Wooden Office Desk - Cable Management",
    basePrice: 4500000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80"
  },
  {
    id: 93,
    title: "Heavy Gaming Laptop 16 Inch - Core i7 / RTX 4070",
    basePrice: 16500000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
  },
  {
    id: 94,
    title: "Stainless Steel Insulated Vacuum Water Bottle 1L",
    basePrice: 85000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80"
  },
  {
    id: 95,
    title: "Winter Fleece Warm Tracksuit - Two Piece Set",
    basePrice: 410000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
  },
  {
    id: 96,
    title: "Bluetooth Soundbar Speaker for TV & PC",
    basePrice: 480000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
  },
  {
    id: 97,
    title: "Minimalist Wall Clock - Silent Non-Ticking",
    basePrice: 95000,
    platform: "1688",
    category: "Mebel",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80"
  },
  {
    id: 98,
    title: "Men's Classic Slip-On Loafers - Genuine Leather",
    basePrice: 380000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
  },
  {
    id: 99,
    title: "High-Speed Wi-Fi 6 Mesh Router System",
    basePrice: 650000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80"
  },
  {
    id: 100,
    title: "Waterproof Travel Cosmetic Makeup Bag",
    basePrice: 68000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80"
  },
  {
    id: 101,
    title: "Ergonomic Vertical Wireless Trackball Mouse",
    basePrice: 260000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80"
  },
  {
    id: 102,
    title: "Reflective Running Vest - Night Safety Gear",
    basePrice: 52000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1506629082925-23914560a827?w=500&q=80"
  },
  {
    id: 103,
    title: "Solid Wood Bedside Nightstand - 2 Drawers",
    basePrice: 420000,
    platform: "1688",
    category: "Mebel",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80"
  },
  {
    id: 104,
    title: "Slim 14 Inch Business Laptop Intel i5 / 16GB",
    basePrice: 6100000,
    platform: "Alibaba",
    category: "Noutbuklar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"
  },
  {
    id: 105,
    title: "Waterproof Bluetooth Shower Speaker - Suction Cup",
    basePrice: 95000,
    platform: "Pinduoduo",
    category: "Gadjetlar",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
  },
  {
    id: 106,
    title: "Casual Men's Cargo Pants - Multi-Pocket Streetwear",
    basePrice: 280000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80"
  },
  {
    id: 107,
    title: "Adjustable Laptop Desk Holder for Bed & Sofa",
    basePrice: 185000,
    platform: "1688",
    category: "Mebel",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  },
  {
    id: 108,
    title: "Smart Air Purifier for Home - HEPA Filter",
    basePrice: 850000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80"
  },
  {
    id: 109,
    title: "Fashion Chain Shoulder Handbag - PU Leather",
    basePrice: 195000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80"
  },
  {
    id: 110,
    title: "High-Back Ergonomic Executive Leather Chair",
    basePrice: 2100000,
    platform: "Alibaba",
    category: "Mebel",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=500&q=80"
  },
  {
    id: 111,
    title: "Men's Slim Fit Polo Shirt - Breathable Cotton",
    basePrice: 135000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
  },
  {
    id: 112,
    title: "USB 3.0 Fast Card Reader SD & TF Card",
    basePrice: 48000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80"
  },
  {
    id: 113,
    title: "Wireless Mechanical Numpad with RGB",
    basePrice: 220000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
  },
  {
    id: 114,
    title: "Oversized Denim Jacket with Sherpa Lining",
    basePrice: 450000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80"
  },
  {
    id: 115,
    title: "Compact 60% Mechanical Keyboard Hot Swappable",
    basePrice: 380000,
    platform: "1688",
    category: "Gadjetlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
  },
  {
    id: 116,
    title: "Foldable Storage Ottoman Cube Bench",
    basePrice: 160000,
    platform: "Pinduoduo",
    category: "Mebel",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80"
  },
  {
    id: 117,
    title: "Portable Handheld Turbo Fan - Rechargeable USB-C",
    basePrice: 75000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 118,
    title: "Ultrabook 14 Inch Touchscreen - Core i7 13th Gen",
    basePrice: 9800000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
  },
  {
    id: 119,
    title: "Unisex Streetwear Printed Graphic Hoodie",
    basePrice: 260000,
    platform: "Pinduoduo",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
  },
  {
    id: 120,
    title: "4K Webcam with Ring Light & Privacy Cover",
    basePrice: 320000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80"
  },
  {
    id: 121,
    title: "Adjustable Wooden Coat Hanger Stand - Living Room",
    basePrice: 210000,
    platform: "1688",
    category: "Mebel",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80"
  },
  {
    id: 122,
    title: "Retro Round Polarized Sunglasses - UV Protection",
    basePrice: 88000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
  },
  {
    id: 123,
    title: "Noise Cancelling Wireless Earbuds - Gaming Low Latency",
    basePrice: 290000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
  },
  {
    id: 124,
    title: "Men's Waterproof Winter Snow Boots - Soft Fur",
    basePrice: 390000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
  },
  {
    id: 125,
    title: "Flexible Tripod Stand with Phone Mount & Bluetooth Remote",
    basePrice: 95000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 126,
    title: "Modern TV Stand Cabinet Console for 65 Inch TV",
    basePrice: 1950000,
    platform: "Taobao",
    category: "Mebel",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80"
  },
  {
    id: 127,
    title: "Affordable Student Chromebook 14 Inch",
    basePrice: 2800000,
    platform: "Alibaba",
    category: "Noutbuklar",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80"
  },
  {
    id: 128,
    title: "Magnetic Car Phone Holder - Dashboard Air Vent",
    basePrice: 42000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  },
  {
    id: 129,
    title: "Smart Thermos Water Bottle with Temperature Display",
    basePrice: 110000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80"
  },
  {
    id: 130,
    title: "Multi-Functional USB-C Hub 8-in-1 Adapter",
    basePrice: 240000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80"
  },
  {
    id: 131,
    title: "Casual Linen Short Sleeve Shirt - Summer Fit",
    basePrice: 165000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
  },
  {
    id: 132,
    title: "Ergonomic Footrest Cushion under Desk",
    basePrice: 130000,
    platform: "Pinduoduo",
    category: "Mebel",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80"
  },
  {
    id: 133,
    title: "1080P Mini Pocket Projector with Battery",
    basePrice: 1250000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  },
  {
    id: 134,
    title: "Women's High-Waisted Casual Wide Trousers",
    basePrice: 220000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80"
  },
  {
    id: 135,
    title: "Adjustable Metal Book Stand - Reading Holder",
    basePrice: 78000,
    platform: "1688",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  },
  {
    id: 136,
    title: "Pro Creator Workstation Laptop 16 Inch - RTX 4080",
    basePrice: 18500000,
    platform: "Taobao",
    category: "Noutbuklar",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
  },
  {
    id: 137,
    title: "Smart Jump Rope with Digital Counter & App",
    basePrice: 115000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80"
  },
  {
    id: 138,
    title: "Wall Mounted Key Holder Rack with Hooks",
    basePrice: 48000,
    platform: "1688",
    category: "Mebel",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80"
  },
  {
    id: 139,
    title: "Dual Wireless Charging Station 3-in-1 Foldable",
    basePrice: 210000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622445268465-84fe5d685735?w=500&q=80"
  },
  {
    id: 140,
    title: "Men's Waterproof Tactical Cargo Jackets",
    basePrice: 380000,
    platform: "Alibaba",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500&q=80"
  },
  {
    id: 141,
    title: "Compact Travel Umbrella - Windproof UV Cut",
    basePrice: 62000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
  },
  {
    id: 142,
    title: "Curved Gaming Monitor 34 Inch Ultrawide 165Hz",
    basePrice: 4500000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"
  },
  {
    id: 143,
    title: "Solid Wood Dressing Table with Mirror & Stool",
    basePrice: 2400000,
    platform: "1688",
    category: "Mebel",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80"
  },
  {
    id: 144,
    title: "Lightweight Everyday Laptop 15.6 - Ryzen 7",
    basePrice: 6700000,
    platform: "Pinduoduo",
    category: "Noutbuklar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"
  },
  {
    id: 145,
    title: "Breathable Mesh Slip-On Walking Shoes",
    basePrice: 195000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
  },
  {
    id: 146,
    title: "Anti-Blue Light Glasses for Screen Reading",
    basePrice: 55000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
  },
  {
    id: 147,
    title: "Electric Desk Dust Vacuum Cleaner - Mini Battery",
    basePrice: 48000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80"
  },
  {
    id: 148,
    title: "Women's Faux Leather Moto Biker Jacket",
    basePrice: 420000,
    platform: "Taobao",
    category: "Kiyimlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
  },
  {
    id: 149,
    title: "Floating Bookshelf Wall Shelf Set - Dark Oak",
    basePrice: 180000,
    platform: "1688",
    category: "Mebel",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80"
  },
  {
    id: 150,
    title: "Portable Laptop Screen Extender Dual Monitor",
    basePrice: 1850000,
    platform: "Alibaba",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"
  },
  {
    id: 151,
    title: "Unisex Basic Cotton T-Shirt Pack of 3",
    basePrice: 145000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
  },
  {
    id: 152,
    title: "Car Trunk Organizer Storage Collapsible",
    basePrice: 125000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  },
  {
    id: 153,
    title: "Smart Digital Body Fat Scale - Bluetooth Sync",
    basePrice: 165000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80"
  },
  {
    id: 154,
    title: "Ultra-Light 13 Inch Laptop - Student Edition",
    basePrice: 4200000,
    platform: "Pinduoduo",
    category: "Noutbuklar",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80"
  },
  {
    id: 155,
    title: "Nordic Minimalist Fabric Armchair",
    basePrice: 890000,
    platform: "1688",
    category: "Mebel",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80"
  },
  {
    id: 156,
    title: "Men's Waterproof Sports Quartz Digital Watch",
    basePrice: 180000,
    platform: "Pinduoduo",
    category: "Aksessuarlar",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80"
  },
  {
    id: 157,
    title: "Wireless Lavalier Microphone Duo for Type-C & iOS",
    basePrice: 310000,
    platform: "Taobao",
    category: "Gadjetlar",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=500&q=80"
  },
  {
    id: 158,
    title: "High-Waisted Yoga Shorts - Squat Proof",
    basePrice: 95000,
    platform: "1688",
    category: "Kiyimlar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80"
  },
];

let selectedPlatform = "all";
let currentShipping = "AVIA";

// LocalStorage'dan o'qish yoki bo'sh massiv ochish
let cartList = JSON.parse(localStorage.getItem("karvon_cart")) || [];
let likedList = JSON.parse(localStorage.getItem("karvon_likes")) || [];

// DOM ELEMENTLARI
const catalogGrid = document.getElementById("catalog-grid");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const ratingCheckbox = document.getElementById("rating-4plus");
const btnAvia = document.getElementById("btn-avia");
const btnGround = document.getElementById("btn-ground");
const productCountText = document.getElementById("product-count-text");
const searchInput = document.getElementById("search-input");
const voiceSearchBtn = document.getElementById("voice-search-btn");
const imageUploadInput = document.getElementById("image-upload");

// Header hisoblagichlarini yangilash funksiyasi
function updateHeaderBadges() {
  const cartBadge = document.querySelector(".fa-bag-shopping + span");
  const likeBadge = document.getElementById("like-count");

  if (cartBadge) cartBadge.textContent = cartList.length;
  if (likeBadge) likeBadge.textContent = likedList.length;
}

// ==========================================
// 3. FILTER MANTIG'I
// ==========================================
window.filterByPlatform = function (platform) {
  selectedPlatform = platform;
  applyFilters();
};

window.setShipping = function (type) {
  currentShipping = type;
  if (type === "AVIA") {
    btnAvia.className =
      "py-2.5 rounded-xl text-xs font-bold border border-amber-500 bg-amber-500/10 text-amber-400 flex items-center justify-center gap-1.5 transition";
    btnGround.className =
      "py-2.5 rounded-xl text-xs font-bold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition";
  } else {
    btnGround.className =
      "py-2.5 rounded-xl text-xs font-bold border border-amber-500 bg-amber-500/10 text-amber-400 flex items-center justify-center gap-1.5 transition";
    btnAvia.className =
      "py-2.5 rounded-xl text-xs font-bold border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition";
  }
  applyFilters();
};

window.applyFilters = function () {
  const minP = parseFloat(minPriceInput?.value) || 0;
  const maxP = parseFloat(maxPriceInput?.value) || Infinity;
  const onlyHighRated = ratingCheckbox?.checked || false;
  const query = searchInput?.value.toLowerCase().trim() || "";

  const multiplier = currentShipping === "AVIA" ? 1.07 : 1.04;

  const filtered = catalogProducts.filter((item) => {
    const matchesPlatform =
      selectedPlatform === "all" || item.platform === selectedPlatform;
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    const finalPrice = item.basePrice * multiplier;
    const matchesPrice = finalPrice >= minP && finalPrice <= maxP;
    const matchesRating = !onlyHighRated || item.rating >= 4.0;

    return matchesPlatform && matchesSearch && matchesPrice && matchesRating;
  });

  if (productCountText) {
    productCountText.textContent = `${filtered.length} ta mahsulot ko'rsatilmoqda`;
  }

  renderCatalog(filtered, multiplier);
};

// ==========================================
// 4. KARTALARNI RENDER QILISH
// ==========================================
function renderCatalog(items, multiplier) {
  if (!catalogGrid) return;
  catalogGrid.innerHTML = "";

  if (items.length === 0) {
    catalogGrid.innerHTML = `<div class="col-span-full py-16 text-center text-zinc-500 text-sm">Mahsulot topilmadi.</div>`;
    return;
  }

  items.forEach((product) => {
    const calculatedPrice = Math.round(product.basePrice * multiplier);
    const formattedPrice = calculatedPrice.toLocaleString("uz-UZ") + " so'm";

    // Mahsulot avval saqlanganlar (liked) ro'yxatida bormi?
    const isLiked = likedList.some((p) => p.id === product.id);

    const card = document.createElement("div");
    card.className =
      "bg-zinc-900/80 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition flex flex-col justify-between group relative";

    card.innerHTML = `<a href="./single.html?id=${product.id}" class="absolute inset-0 z-10"></a>
        <div class="relative h-48 bg-zinc-800 overflow-hidden">
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          <span class="absolute top-2 left-2 bg-black/60 backdrop-blur text-[10px] text-amber-400 font-bold px-2 py-0.5 rounded border border-amber-500/30 uppercase">
            ${currentShipping}
          </span>

          <!-- Like Tugmasi -->
          <button onclick="toggleCatalogLike(this, ${product.id})" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur flex items-center justify-center transition z-20">
            <i class="${isLiked ? "fa-solid text-red-500" : "fa-regular text-zinc-300"} fa-heart text-xs"></i>
          </button>
        </div>

        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between text-[11px] text-zinc-500">
            <span>${product.platform} • ${product.category}</span>
            <span class="text-amber-500 font-bold flex items-center gap-0.5">
              <i class="fa-solid fa-star text-[9px]"></i> ${product.rating}
            </span>
          </div>

          <h3 class="text-xs font-semibold text-zinc-200 line-clamp-2 leading-snug">
            ${product.title}
          </h3>
        </div>

      <div class="p-4 pt-0 space-y-3">
        <div class="bg-zinc-950/60 rounded-xl p-2.5 border border-zinc-800/50">
          <div class="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Yakuniy Narx</div>
          <div class="text-sm font-black text-white mt-0.5">${formattedPrice}</div>
        </div>

        <!-- Action Tugmalar -->
        <div class="grid grid-cols-2 gap-2 relative z-20">
          <a href="./single.html?id=${product.id}" class="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 border border-zinc-700/50">
            <i class="fa-solid fa-circle-info text-[11px]"></i> Batafsil
          </a>

          <button onclick="addToCart(this, ${product.id}, ${calculatedPrice})" class="w-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white font-semibold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-cart-shopping text-[11px]"></i> Savatga
          </button>
        </div>
      </div>
    `;

    catalogGrid.appendChild(card);
  });
}

// ==========================================
// 5. LOCALSTORAGE GA SAQLASH FUNKSIYALARI
// ==========================================

// Savatga qo'shish va LocalStorage ga saqlash
window.addToCart = function (button, productId, finalPrice) {
  const product = catalogProducts.find((p) => p.id === productId);
  if (!product) return;

  // Mahsulot ma'lumotlarini tayyorlash
  const itemToAdd = {
    id: product.id,
    title: product.title,
    price: finalPrice.toLocaleString("uz-UZ") + " so'm",
    image: product.image,
    platform: product.platform,
    category: product.category,
  };

  // Savatda allaqachon bormi?
  const exists = cartList.some((item) => item.id === productId);
  if (!exists) {
    cartList.push(itemToAdd);
    localStorage.setItem("karvon_cart", JSON.stringify(cartList));
  }

  updateHeaderBadges();

  // Visual animatsiya
  const originalContent = button.innerHTML;
  button.innerHTML = `<i class="fa-solid fa-check text-green-400"></i> Savatda!`;
  button.classList.add(
    "bg-green-600/20",
    "text-green-400",
    "border",
    "border-green-500/40",
  );

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.classList.remove(
      "bg-green-600/20",
      "text-green-400",
      "border",
      "border-green-500/40",
    );
  }, 1200);
};

// Like bosish va LocalStorage ga saqlash
window.toggleCatalogLike = function (button, productId) {
  const icon = button.querySelector("i");
  const product = catalogProducts.find((p) => p.id === productId);
  if (!product) return;

  const index = likedList.findIndex((item) => item.id === productId);

  if (index === -1) {
    // Ro'yxatga qo'shish
    likedList.push({
      id: product.id,
      title: product.title,
      price: product.basePrice.toLocaleString("uz-UZ") + " so'm",
      image: product.image,
    });
    icon.classList.remove("fa-regular", "text-zinc-300");
    icon.classList.add("fa-solid", "text-red-500");
  } else {
    // Ro'yxatdan olib tashlash
    likedList.splice(index, 1);
    icon.classList.remove("fa-solid", "text-red-500");
    icon.classList.add("fa-regular", "text-zinc-300");
  }

  localStorage.setItem("karvon_likes", JSON.stringify(likedList));
  updateHeaderBadges();
};

// ==========================================
// 6. EVENT LISTENERS VA SHAG'AL ISHGA TUSHIRISH
// ==========================================
if (minPriceInput) minPriceInput.addEventListener("input", applyFilters);
if (maxPriceInput) maxPriceInput.addEventListener("input", applyFilters);
if (searchInput) searchInput.addEventListener("input", applyFilters);

// Ovozli qidiruv
if (voiceSearchBtn) {
  voiceSearchBtn.addEventListener("click", () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition)
      return alert("Brauzeringiz ovozli qidiruvni qo'llab-quvvatlamaydi.");

    const recognition = new SpeechRecognition();
    recognition.lang = "uz-UZ";
    recognition.start();

    voiceSearchBtn.classList.add("text-red-500", "animate-pulse");

    recognition.onresult = (e) => {
      if (searchInput) {
        searchInput.value = e.results[0][0].transcript;
        applyFilters();
      }
      voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
    };

    recognition.onerror = () =>
      voiceSearchBtn.classList.remove("text-red-500", "animate-pulse");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderBadges();
  applyFilters();
});

// ==========================================
// HEADER USER PROFILE CHECK (USER MA'LUMOTINI OLISH)
// ==========================================
function checkHeaderUser() {
  const headerUserContainer = document.getElementById("header-user-container");
  if (!headerUserContainer) return;

  // LocalStorage dan foydalanuvchi ma'lumotlarini o'qish
  const userData = JSON.parse(localStorage.getItem("karvon_user"));

  if (userData && userData.firstName) {
    // AGAR RO'YXATDAN O'TGAN BO'LSA -> Rasm va Ismi chiqadi
    const userAvatar =
      userData.avatar ||
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";

    headerUserContainer.innerHTML = `
            <a href="./user.html" class="flex items-center gap-2 hover:opacity-80 transition bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-xl">
                <img src="${userAvatar}" alt="${userData.firstName}" class="w-6 h-6 rounded-full object-cover border border-amber-500">
                <span class="text-xs font-semibold text-zinc-200">${userData.firstName}</span>
            </a>
        `;
  } else {

    headerUserContainer.innerHTML = `
            <a href="./user.html">
                <button class="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-1.5 rounded-lg transition">
                    Kirish
                </button>
            </a>
        `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  checkHeaderUser();
  updateHeaderBadges();
  applyFilters();
});