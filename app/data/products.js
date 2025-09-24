export const products = [
  // --- TILES ---
  {
    id: '1',
    name: 'Calacatta Marble Tile',
    mainCategory: 'Tiles',
    price: 1000,
    subCategory: 'Polished', 
    size: '12x24 inch',
    description: 'The Calacatta Marble Tile is a premium choice in the Tiles category, perfect for those seeking timeless beauty and sophistication. Belonging to the Polished sub-category, it features a glossy, mirror-like finish that enhances the elegance of any space. Its 12x24 inch size makes it versatile for both walls and floors, offering a modern yet classic appeal. With a pristine white background accented by bold grey veining',
    image: '/tile1.jpg',
    gallery: [
      '/tile2.jpg',
      '/tile3.jpg',
      '/tile7.jpg',
    ],
  },
  {
    id: '2',
    name: 'Modern Concrete Look Tile',
    mainCategory: 'Tiles',
    price: 45.50,
    subCategory: 'Concrete Look',
    // tags: ['Matte', 'Living Room', 'Office', 'Modern'],
    size: '24x24 inch',
    description: 'Achieve an industrial, minimalist aesthetic with this durable porcelain tile that mimics the look of poured concrete.',
    image: '/tile2.jpg',
    gallery: [ 
       '/tile2.jpg',
      '/tile3.jpg',
      '/tile7.jpg',
     ],
  },
  {
    id: '3',
    name: 'Natural Oak Wood Effect Tile',
    mainCategory: 'Tiles',
    price: 52.00,
    subCategory: 'Wood Look',
    // tags: ['Textured', 'Bedroom', 'Home'],
    size: '8x48 inch',
    description: 'Get the warm, inviting look of natural oak wood with the durability and low maintenance of porcelain.',
    image: '/tile3.jpg',
    gallery: [ 
       '/tile2.jpg',
      '/tile3.jpg',
      '/tile7.jpg',
    ],
  },
  {
    id: '4',
    name: 'Classic White Subway Tile',
    mainCategory: 'Tiles',
    price: 28.99,
    subCategory: 'Subway',
    // tags: ['Glossy', 'Kitchen', 'Home', 'Classic'],
    size: '3x6 inch',
    description: 'A timeless classic that never goes out of style. The white subway tile is perfect for kitchen backsplashes and bathroom walls.',
    image: '/tile4.jpg',
    gallery: [ 
       '/tile2.jpg',
      '/tile3.jpg',
      '/tile7.jpg',
    ],
  },
  {
    id: '5',
    name: 'new arrivals',
    mainCategory: 'Tiles',
    price: 28.99,
    subCategory: 'new arrivals',
    // tags: ['Glossy', 'Kitchen', 'Home', 'Classic'],
    size: '3x6 inch',
    description: 'A timeless classic that never goes out of style. The white subway tile is perfect for kitchen backsplashes and bathroom walls.',
    image: '/tile5.jpg',
    gallery: [
       '/tile2.jpg',
      '/tile3.jpg',
      '/tile7.jpg',
    ],
  },
  {
    id: '6',
    name: 'new arrivals 2',
    mainCategory: 'Tiles',
    price: 28.99,
    subCategory: 'new arrivals',
    // tags: ['Glossy', 'Kitchen', 'Home', 'Classic'],
    size: '3x6 inch',
    description: 'A timeless classic that never goes out of style. The white subway tile is perfect for kitchen backsplashes and bathroom walls.',
    image: '/tile6.jpg',
    gallery: [
       '/tile2.jpg',
      '/tile3.jpg',
      '/tile7.jpg',
     ],
  },
 

  // --- SANITARY ---
  {
    id: '7',
    name: 'Modern Wall-Hung Commode',
    mainCategory: 'Sanitary',
    price: 250.00,
    subCategory: 'Commode', // Specific type for filtering
    // tags: ['Modern', 'Space Saving'],
    size: 'Standard',
    description: 'A sleek and modern wall-hung commode that saves space and offers a contemporary look.',
    image: '/commode1.jpg',
    gallery: [ 
      '/commode1.jpg',
      '/commode2.jpg',
      '/commode3.jpg'
     ],
  },
  {
    id: '8',
    name: 'Countertop Ceramic Basin',
    mainCategory: 'Sanitary',
    price: 120.00,
    subCategory: 'Basin', // Specific type for filtering
    // tags: ['Elegant', 'Countertop'],
    size: '18x12 inch',
    description: 'An elegant countertop basin made from high-quality ceramic, perfect for modern bathrooms.',
    image: '/basin1.jpg',
    gallery: [ 
      '/basin1.jpg',
      '/basin2.jpg',
     ],
  },
  {
    id: '9',
    name: 'Freestanding Bathtub',
    mainCategory: 'Sanitary',
    price: 850.00,
    subCategory: 'Bathtub', // Specific type for filtering
    // tags: ['Luxury', 'Freestanding'],
    size: '60-inch',
    description: 'Create a stunning focal point in your bathroom with this luxurious freestanding bathtub.',
    image: '/bathtubs1.jpg',
    gallery: [ 
      '/bathtubs1.jpg',
      '/bathtubs2.jpg',
      
     ],
  },

  // --- MARBLE & STONE ---
  {
    id: '10',
    name: 'Black Marquina Marble Slab',
    mainCategory: 'Marble & Stone',
    price: 150.00,
    subCategory: 'Slab', // Specific type for filtering
    // tags: ['Luxury', 'Countertop'],
    size: 'Per Sq. Ft.',
    description: 'A dramatic and bold black marble with striking white veining, perfect for luxurious kitchen countertops.',
    image: '/slab1.jpg',
    gallery: [ 
      '/slab1.jpg',
      '/slab2.jpg'
    ],
  },
  {
    id: '11',
    name: 'Italian Carrara Flooring',
    mainCategory: 'Marble & Stone',
    price: 135.00,
    subCategory: 'Flooring', // Specific type for filtering
    // tags: ['Classic', 'Elegant'],
    size: 'Per Sq. Ft.',
    description: 'A classic Italian marble known for its soft white background and subtle grey veining.',
    image: '/flooring1.jpg',
    gallery: [ '/flooring1.jpg','/flooring2.jpg' ],
  },
  
  // tiles

 {
    id: '12',
    name: 'Graphite Glow Collection',
    mainCategory: 'Tiles',
    // price: 28.99,
    subCategory: ['Concrete Look','Wall Tiles'],
    // tags: ['Glossy', 'Kitchen', 'Home', 'Classic'],
    size: '60x120 cm',
    description: 'The Graphite Glow Collection brings together modern elegance and subtle luxury. Featuring soft silver grey, bold charcoal, and a striking mosaic with golden highlights, this series is designed to create a perfect balance of simplicity and style. Its versatile shades suit both light and dark themes, while the golden accents add a touch of premium sophistication. Ideal for accent walls, living spaces, kitchens, and bathrooms, this collection transforms any space into a contemporary masterpiece.',
    image: '/id12_main.jpg',
    gallery: [
      '/id12_main.jpg',
      '/id12_gallery1.jpg',
      '/id12_gallery2.jpg',
      '/id12_gallery3.jpg',
      '/id12_gallery4.jpg',
     
    ],
  },

 {
    id: '13',
    name: 'Marble Essence',
    mainCategory: 'Tiles',
    // price: 28.99,
    subCategory: ['Wall Tiles'],
    // tags: ['Glossy', 'Kitchen', 'Home', 'Classic'],
    size: '60x120 cm',
    description: 'The Marble Essence brings together modern elegance and subtle luxury. Featuring soft silver grey, bold charcoal, and a striking mosaic with golden highlights, this series is designed to create a perfect balance of simplicity and style. Its versatile shades suit both light and dark themes, while the golden accents add a touch of premium sophistication. Ideal for accent walls, living spaces, kitchens, and bathrooms, this collection transforms any space into a contemporary masterpiece.',
    image: '/id13_main.jpg',
    gallery: [
      '/id13_main.jpg',
      '/id13_gallery1.jpg',
      '/id13_gallery2.jpg',
      '/id13_gallery3.jpg',
 
    ],
  },
   {
    id: '14',
    name: 'Modern Commodes',
    mainCategory: 'Sanitary',
    // price: 250.00,
    subCategory: 'Commode', // Specific type for filtering
    // tags: ['Modern', 'Space Saving'],
    size: 'Standard',
    description: 'A sleek and modern wall-hung commode that saves space and offers a contemporary look.',
    image: '/commode4.jpg',
    gallery: [ 
      '/commode4.jpg',
      '/commode5.jpg',
      '/commode6.jpg',
      '/commode7.jpg'
     ],
  },
   {
    id: '15',
    name: 'AquaElite | Premium Bath & Kitchen Taps',
    mainCategory: 'Sanitary',
    // price: 250.00,
    subCategory: 'Tap', // Specific type for filtering
    // tags: ['Modern', 'Space Saving'],
    size: 'Standard',
    description: 'AquaElite taps & shower fittings luxury aur durability ka perfect combination hain. High-quality brass aur chrome finishing ke sath yeh taps aapke bathroom aur kitchen ko ek modern aur stylish look dete hain. Rust-proof aur long-lasting material Smooth water flow aur leak-proof design Available in multiple designs  classic, modern, aur luxury gold finish Suitable for bathrooms, kitchens aur wash basins In fittings ke zariye aap apne ghar ko ek premium aur elegant touch de sakte hain.',
    image: '/tap1.jpg',
    gallery: [ 
      '/tap1.jpg',
      '/tap2.jpg',
      '/tap3.jpg',
  
     ],
  },
];