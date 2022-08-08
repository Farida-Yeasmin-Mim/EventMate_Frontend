import nacho from "./images/dishes/nacho-burger.jpg";


// For Category List
export const categoryList = [
    {
      id: 1,
      value: 'decoration',
      label: '💫 Decoration',
    }, 
    
    {
      id: 2,
      value: 'catering',
      label: '🍕 Catering',
    },
  ];
  
  // For Rating List
  export const ratingList = [
    {
      id: 1,
      value: '1',
      label: '1🌟',
    },
    {
      id: 2,
      value: '2',
      label: '2🌟',
    },
    {
      id: 3,
      value: '3',
      label: '3🌟',
    },
    {
      id: 4,
      value: '4',
      label: '4🌟',
    },
    {
      id: 5,
      value: '5',
      label: '5🌟',
    },
  ];
  
  
  // For side List
  export const dataList = [
    
    /*For Decoration*/
    {
      id: 1,
      title: 'Wedding Decoration 1',
      serviceTime: '7 days',
      deliveryFee: 3.44,
      category: 'decoration',
      decoration: 'Wedding',
      rating: 5,
      price: 14500,
      coverSrc: nacho,
    },
    {
      id: 2,
      title: 'Birthday Decoration 1',
      serviceTime: '15-20min',
      deliveryFee: 4.94,
      category: 'decoration',
      decoration: 'Birthday',
      rating: 4,
      price: 8500,
      coverSrc: 'https://m.media-amazon.com/images/I/81nU6clDgEL.jpg',
    },
    {
      id: 3,
      title: 'Proposal Decoration 1',
      serviceTime: '30-22min',
      deliveryFee: 4.94,
      category: 'decoration',
      decoration: 'Proposal',
      rating: 3,
      price: 5000,
      coverSrc: 'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000',
    },
    {
      id: 4,
      title: 'Wedding Decoration 2',
      serviceTime: '10-18min',
      deliveryFee: 2.14,
      category: 'decoration',
      decoration: 'Wedding',
      rating: 1,
      price: 40000,
      coverSrc: '/images/places/sea.jpg',
    },
    {
      id: 5,
      title: 'Birthday Decoration 2',
      serviceTime: '25-30min',
      deliveryFee: 6.79,
      category: 'decoration',
      decoration: 'Proposal',
      rating: 5,
      price: 9000,
      coverSrc: '/images/places/italiian.jpg',
    },
    {
      id: 6,
      title: 'Proposal Decoration 2',
      serviceTime: '5-15min',
      deliveryFee: 2.87,
      category: 'decoration',
      decoration: 'Birthday',
      rating: 5,
      price: 6000,
      coverSrc: '/images/places/fookyew2.jpg',
    },
    
    /*For Catering*/
    {
      id: 7,
      title: 'Nacho cheeseburger',
      serviceTime: '50-65min',
      deliveryFee: 8.5,
      category: 'catering',
      decoration: 'american',
      rating: 2,
      price: 2200,
      coverSrc: '../filter/images/dishes/nacho-burger.jpg',
      // /images/dishes/nacho-burger.jpg 
    },
    {
      id: 8,
      title: 'Meaty Onion Pizza',
      serviceTime: '10-15min',
      deliveryFee: 1.8,
      category: 'catering',
      decoration: 'italian',
      rating: 1,
      price: 3000,
      coverSrc: '/images/dishes/Mushroom-Risotto-Recipe-1-1200.jpg',
    },
    {
      id: 9,
      title: 'Shitake Fried Rice',
      serviceTime: '12-18min',
      deliveryFee: 3.33,
      category: 'catering',
      decoration: 'chinese',
      rating: 4,
      price: 2750,
      coverSrc: '/images/dishes/shiitake-salmon-fried-rice-0218-103230720.jpg',
    },
    {
      id: 10,
      title: 'Pesto chicken stew',
      serviceTime: '30-38min',
      deliveryFee: 1.9,
      category: 'catering',
      decoration: 'american',
      rating: 2,
      price: 4350,
      coverSrc: '/images/dishes/pesto-chicken.jpg',
    },
    {
      id: 11,
      title: 'Kacchi Biriyani',
      serviceTime: '16-20min',
      deliveryFee: 4.1,
      category: 'catering',
      decoration: 'italian',
      rating: 3,
      price: 3300,
      coverSrc: '/images/dishes/as-tomato-bruschetta-articleLarge.jpg',
    },
    {
      id: 12,
      title: 'Dim Sums',
      serviceTime: '24-30min',
      deliveryFee: 1.5,
      category: 'catering',
      decoration: 'chinese',
      rating: 2,
      price: 4100,
      coverSrc: '/images/dishes/dimsums.jpg',
    },
  ];   