export const categories = [
  {
    id: 1,
    name: 'All',
    image: require('../assets/images/all.png'),
  },
  {
    id: 2,
    name: 'Pizza',
    image: require('../assets/images/pizza_category.png'),
  },
  {
    id: 3,
    name: 'Noodle',
    image: require('../assets/images/noodle_category.png'),
  },
  {
    id: 4,
    name: 'Hotpot',
    image: require('../assets/images/hotpot_category.png'),
  },
  {
    id: 5,
    name: 'Drink',
    image: require('../assets/images/drink_category.png'),
  },
  {
    id: 6,
    name: 'Hamburger',
    image: require('../assets/images/hamburger_category.png'),
  },
  {
    id: 7,
    name: 'Snack',
    image: require('../assets/images/snack_category.png'),
  }
];

export const featured = {
  id: 1,
  title: 'Nổi bật',
  description: 'Ngon nhất',
  restaurants: [
    {
      id: 1,
      name: "Domino's Pizza",
      image: require('../assets/images/pizza_domino.png'),
      description: 'Hot and spicy pizza',
      lng: 10.980828033029463,
      lat: 106.67551466976745,
      address: 'Ben Cat, Binh Duong',
      stars: 4.5,
      reviews: '6.1k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza bò mỹ',
          description: 'Siêu topping',
          price: 235000,
          image: require('../assets/images/pizza_domino_bogo.png'),
        },
        {
          id: 2, 
          name: 'Pizza cay nóng',
          description: 'Xốt habanero',
          price: 230000,
          image: require('../assets/images/pizza_domino_cay.png'),
        },
        {
          id: 3, 
          name: 'Pizza hải sản',
          description: 'Xốt pesto chanh sả',
          price: 235000,
          image: require('../assets/images/pizza_domino_haisan.png'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_category.png'),
        },
      ]
    },
    {
      id: 2,
      name: 'Pizza Hut',
      image: require('../assets/images/pizza_hut.png'),
      description: 'Ngon hun hút',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Dau Mot, Binh Duong',
      stars: 3.5,
      reviews: '8.1',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza hải vị vi vu',
          description: 'Hương vị biển bùng nổ',
          price: 209000,
          image: require('../assets/images/pizza_hut_haivi.png'),
        },
        {
          id: 2, 
          name: 'Pizza gà giòn',
          description: 'Tuyệt phẩm từ gà Popcorn',
          price: 189000,
          image: require('../assets/images/pizza_hut_gagion.png'),
        },
        {
          id: 3, 
          name: 'Pizza Rau củ',
          description: 'Thanh đạm nhưng cuốn hút',
          price: 149000,
          image: require('../assets/images/pizza_hut_raucu.png'),
        },
        {
          id: 4, 
          name: 'Pizza Hải sản',
          description: 'Tôm, thanh cua, cà chua bi,...',
          price: 199000,
          image: require('../assets/images/pizza_hut_haisan.png'),
        },
      ]
    },
    {
      id: 3,
      name: "Domino's Pizza",
      image: require('../assets/images/pizza_domino.png'),
      description: 'Hot and spicy pizza',
      lng: 10.980828033029463,
      lat: 106.67551466976745,
      address: 'Ben Cat, Binh Duong',
      stars: 4.5,
      reviews: '6.1k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza bò mỹ',
          description: 'Siêu topping',
          price: 235000,
          image: require('../assets/images/pizza_domino_bogo.png'),
        },
        {
          id: 2, 
          name: 'Pizza cay nóng',
          description: 'Xốt habanero',
          price: 230000,
          image: require('../assets/images/pizza_domino_cay.png'),
        },
        {
          id: 3, 
          name: 'Pizza hải sản',
          description: 'Xốt pesto chanh sả',
          price: 235000,
          image: require('../assets/images/pizza_domino_haisan.png'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_category.png'),
        },
      ]
    },
    {
      id: 4,
      name: 'Papa Johns',
      image: require('../assets/images/pizza_restaurant.jpg'),
      description: 'Hot and spicy pizza',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Duc, HCM',
      stars: 4,
      reviews: '4.4k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 2, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 3, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
      ]
    },
    {
      id: 5,
      name: 'Pizza Hut',
      image: require('../assets/images/noodle_hut.png'),
      description: 'Hot and spicy pizza',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Dau Mot, Binh Duong',
      stars: 3.2,
      reviews: '2.3k',
      category: 'Noodle',
      dishes: [
        {
          id: 1, 
          name: 'Mỳ ý sốt bò bằm',
          description: 'Sốt bò bằm cà chua',
          price: 120000,
          image: require('../assets/images/noodle_hut_bo.png'),
        },
        {
          id: 2, 
          name: 'Mỳ ý hải sản',
          description: 'Tôm, thanh cua,...',
          price: 130000,
          image: require('../assets/images/noodle_hut_bo.png'),
        },
        {
          id: 3, 
          name: 'Mỳ ý sốt bò bằm',
          description: 'Sốt bò bằm cà chua',
          price: 120000,
          image: require('../assets/images/noodle_hut_bo.png'),
        },
        {
          id: 4, 
          name: 'Mỳ ý hải sản',
          description: 'Sốt tiêu đen',
          price: 130000,
          image: require('../assets/images/noodle_hut_bo.png'),
        },
      ]
    },
    {
      id: 6,
      name: 'Phúc Long',
      image: require('../assets/images/drink_phuclong.png'),
      description: 'Trà và cà phê',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Duc, HCM',
      stars: 5,
      reviews: '10k',
      category: 'Drink',
      dishes: [
        {
          id: 1, 
          name: 'Trà Lài Mãng cầu',
          description: 'BST Cầu phúc',
          price: 65000,
          image: require('../assets/images/drink_phuclong_mangcau.png'),
        },
        {
          id: 2, 
          name: 'Trà Sữa Mãng cầu',
          description: 'BST Cầu phúc',
          price: 65000,
          image: require('../assets/images/drink_phuclong_mangcau.png'),
        },
        {
          id: 3, 
          name: 'Trà Sữa Matcha',
          description: 'Matcha',
          price: 45000,
          image: require('../assets/images/drink_phuclong_trasua.png'),
        },
        {
          id: 4, 
          name: 'Hồng trà đào sữa',
          description: 'Hồng trà',
          price: 45000,
          image: require('../assets/images/drink_phuclong_trasua.png'),
        },
      ]
    },
  ]
}

export const cheapest = {
  id: 1,
  title: 'Khuyến mãi',
  description: 'Rẻ nhất',
  restaurants: [
    {
      id: 1,
      name: "Domino's Pizza",
      image: require('../assets/images/pizza_domino.png'),
      description: 'Hot and spicy pizza',
      lng: 10.980828033029463,
      lat: 106.67551466976745,
      address: 'Ben Cat, Binh Duong',
      stars: 4.5,
      reviews: '6.1k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza bò mỹ',
          description: 'Siêu topping',
          price: 235000,
          image: require('../assets/images/pizza_domino_bogo.png'),
        },
        {
          id: 2, 
          name: 'Pizza cay nóng',
          description: 'Xốt habanero',
          price: 230000,
          image: require('../assets/images/pizza_domino_cay.png'),
        },
        {
          id: 3, 
          name: 'Pizza hải sản',
          description: 'Xốt pesto chanh sả',
          price: 235000,
          image: require('../assets/images/pizza_domino_haisan.png'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_category.png'),
        },
      ]
    },
    {
      id: 2,
      name: 'Pizza Hut',
      image: require('../assets/images/pizza_hut.png'),
      description: 'Ngon hun hút',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Dau Mot, Binh Duong',
      stars: 3.5,
      reviews: '8.1',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza hải vị vi vu',
          description: 'Hương vị biển bùng nổ',
          price: 209000,
          image: require('../assets/images/pizza_hut_haivi.png'),
        },
        {
          id: 2, 
          name: 'Pizza gà giòn',
          description: 'Tuyệt phẩm từ gà Popcorn',
          price: 189000,
          image: require('../assets/images/pizza_hut_gagion.png'),
        },
        {
          id: 3, 
          name: 'Pizza Rau củ',
          description: 'Thanh đạm nhưng cuốn hút',
          price: 149000,
          image: require('../assets/images/pizza_hut_raucu.png'),
        },
        {
          id: 4, 
          name: 'Pizza Hải sản',
          description: 'Tôm, thanh cua, cà chua bi,...',
          price: 199000,
          image: require('../assets/images/pizza_hut_haisan.png'),
        },
      ]
    },
    {
      id: 3,
      name: "Domino's Pizza",
      image: require('../assets/images/pizza_domino.png'),
      description: 'Hot and spicy pizza',
      lng: 10.980828033029463,
      lat: 106.67551466976745,
      address: 'Ben Cat, Binh Duong',
      stars: 4.5,
      reviews: '6.1k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza bò mỹ',
          description: 'Siêu topping',
          price: 235000,
          image: require('../assets/images/pizza_domino_bogo.png'),
        },
        {
          id: 2, 
          name: 'Pizza cay nóng',
          description: 'Xốt habanero',
          price: 230000,
          image: require('../assets/images/pizza_domino_cay.png'),
        },
        {
          id: 3, 
          name: 'Pizza hải sản',
          description: 'Xốt pesto chanh sả',
          price: 235000,
          image: require('../assets/images/pizza_domino_haisan.png'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_category.png'),
        },
      ]
    },
    {
      id: 4,
      name: 'Papa Johns',
      image: require('../assets/images/pizza_restaurant.jpg'),
      description: 'Hot and spicy pizza',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Duc, HCM',
      stars: 4,
      reviews: '4.4k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 2, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 3, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
      ]
    },
  ]
  }

export const convenient = {
  id: 1,
  title: 'Tiện lợi',
  description: 'Gần nhất',
  restaurants: [
    {
      id: 1,
      name: "Domino's Pizza",
      image: require('../assets/images/pizza_domino.png'),
      description: 'Hot and spicy pizza',
      lng: 10.980828033029463,
      lat: 106.67551466976745,
      address: 'Ben Cat, Binh Duong',
      stars: 4.5,
      reviews: '6.1k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza bò mỹ',
          description: 'Siêu topping',
          price: 235000,
          image: require('../assets/images/pizza_domino_bogo.png'),
        },
        {
          id: 2, 
          name: 'Pizza cay nóng',
          description: 'Xốt habanero',
          price: 230000,
          image: require('../assets/images/pizza_domino_cay.png'),
        },
        {
          id: 3, 
          name: 'Pizza hải sản',
          description: 'Xốt pesto chanh sả',
          price: 235000,
          image: require('../assets/images/pizza_domino_haisan.png'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_category.png'),
        },
      ]
    },
    {
      id: 2,
      name: 'Pizza Hut',
      image: require('../assets/images/pizza_hut.png'),
      description: 'Ngon hun hút',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Dau Mot, Binh Duong',
      stars: 3.5,
      reviews: '8.1',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza hải vị vi vu',
          description: 'Hương vị biển bùng nổ',
          price: 209000,
          image: require('../assets/images/pizza_hut_haivi.png'),
        },
        {
          id: 2, 
          name: 'Pizza gà giòn',
          description: 'Tuyệt phẩm từ gà Popcorn',
          price: 189000,
          image: require('../assets/images/pizza_hut_gagion.png'),
        },
        {
          id: 3, 
          name: 'Pizza Rau củ',
          description: 'Thanh đạm nhưng cuốn hút',
          price: 149000,
          image: require('../assets/images/pizza_hut_raucu.png'),
        },
        {
          id: 4, 
          name: 'Pizza Hải sản',
          description: 'Tôm, thanh cua, cà chua bi,...',
          price: 199000,
          image: require('../assets/images/pizza_hut_haisan.png'),
        },
      ]
    },
    {
      id: 3,
      name: "Domino's Pizza",
      image: require('../assets/images/pizza_domino.png'),
      description: 'Hot and spicy pizza',
      lng: 10.980828033029463,
      lat: 106.67551466976745,
      address: 'Ben Cat, Binh Duong',
      stars: 4.5,
      reviews: '6.1k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'Pizza bò mỹ',
          description: 'Siêu topping',
          price: 235000,
          image: require('../assets/images/pizza_domino_bogo.png'),
        },
        {
          id: 2, 
          name: 'Pizza cay nóng',
          description: 'Xốt habanero',
          price: 230000,
          image: require('../assets/images/pizza_domino_cay.png'),
        },
        {
          id: 3, 
          name: 'Pizza hải sản',
          description: 'Xốt pesto chanh sả',
          price: 235000,
          image: require('../assets/images/pizza_domino_haisan.png'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_category.png'),
        },
      ]
    },
    {
      id: 4,
      name: 'Papa Johns',
      image: require('../assets/images/pizza_restaurant.jpg'),
      description: 'Hot and spicy pizza',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Duc, HCM',
      stars: 4,
      reviews: '4.4k',
      category: 'Pizza',
      dishes: [
        {
          id: 1, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 2, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 3, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
        {
          id: 4, 
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizza_restaurant.jpg'),
        },
      ]
    },
    {
      id: 5,
      name: 'Hightlands Coffee',
      image: require('../assets/images/drink_hightland.png'),
      description: 'Cà phê ngon',
      lng: 38.2145602,
      lat: -85.532469,
      address: 'Thu Dau Mot, Binh Duong',
      stars: 4.6,
      reviews: '6.2k',
      category: 'Drink',
      dishes: [
        {
          id: 1, 
          name: 'Freeze trà xanh',
          description: 'Matcha',
          price: 50000,
          image: require('../assets/images/drink_hightland_freeze.png'),
        },
        {
          id: 2, 
          name: 'Trà sen vàng',
          description: 'Trà sen',
          price: 42000,
          image: require('../assets/images/drink_hightland_trasen.png'),
        },
        {
          id: 3, 
          name: 'Phindi kem sữa',
          description: 'Kem sữa',
          price: 40000,
          image: require('../assets/images/drink_hightland_kemsua.png'),
        },
      ]
    },
  ]
}