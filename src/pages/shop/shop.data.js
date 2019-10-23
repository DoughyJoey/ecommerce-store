const SHOP_DATA = [
  {
    id: 1,
    title: 'Security',
    routeName: 'security',
    items: [
      {
        id: 1,
        name: 'Security cam 1',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 165
      },
      {
        id: 2,
        name: 'Security cam 2',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 187
      },
      {
        id: 3,
        name: 'Security cam 3',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 165
      },
      {
        id: 4,
        name: 'Security cam 4',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 123
      },
      {
        id: 5,
        name: 'Security cam 5',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 126
      },
      {
        id: 6,
        name: 'Security cam 6',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 200
      },
      {
        id: 7,
        name: 'Security cam 7',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 365
      },
      {
        id: 8,
        name: 'Security cam 8',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 265
      },
      {
        id: 9,
        name: 'Security cam 9',
        imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 87
      }
    ]
  },
  {
    id: 2,
    title: 'Thermostats',
    routeName: 'thermostat',
    items: [
      {
        id: 10,
        name: 'Thermostat 1',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 237
      },
      {
        id: 11,
        name: 'Thermostat 2',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 394
      },
      {
        id: 12,
        name: 'Thermostat 3',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 384
      },
      {
        id: 13,
        name: 'Thermostat 4',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 399
      },
      {
        id: 14,
        name: 'Thermostat 5',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 198
      },
      {
        id: 15,
        name: 'Thermostat 6',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 387
      },
      {
        id: 16,
        name: 'Thermostat 7',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 200
      },
      {
        id: 17,
        name: 'Thermostat 8',
        imageUrl: 'https://live.staticflickr.com/4466/24011186108_feb76e07dd_b.jpg',
        price: 500
      }
    ]
  },
  {
    id: 3,
    title: 'Vacuums',
    routeName: 'vacuum',
    items: [
      {
        id: 18,
        name: 'Vacuum 1',
        imageUrl: 'https://live.staticflickr.com/2289/5828181726_9ed5c5c97d_b.jpg',
        price: 165
      },
      {
        id: 19,
        name: 'Vacuum 2',
        imageUrl: 'https://live.staticflickr.com/2289/5828181726_9ed5c5c97d_b.jpg',
        price: 40
      },
      {
        id: 20,
        name: 'Vacuum 3',
        imageUrl: 'https://live.staticflickr.com/2289/5828181726_9ed5c5c97d_b.jpg',
        price: 60
      },
      {
        id: 21,
        name: 'Vacuum 4',
        imageUrl: 'https://live.staticflickr.com/2289/5828181726_9ed5c5c97d_b.jpg',
        price: 100
      },
      {
        id: 22,
        name: 'Vacuum 5',
        imageUrl: 'https://live.staticflickr.com/2289/5828181726_9ed5c5c97d_b.jpg',
        price: 130
      }
    ]
  },
  {
    id: 4,
    title: 'Lighting',
    routeName: 'lighting',
    items: [
      {
        id: 23,
        name: 'Light 1',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 45
      },
      {
        id: 24,
        name: 'Light 2',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 56
      },
      {
        id: 25,
        name: 'Light 3',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Light 4',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 98
      },
      {
        id: 27,
        name: 'Light 5',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 99
      },
      {
        id: 28,
        name: 'Light 6',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 23
      },
      {
        id: 29,
        name: 'Light 7',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/22/09/32/led-734433_960_720.jpg',
        price: 15
      }
    ]
  },
  {
    id: 5,
    title: 'Speakers',
    routeName: 'speaker',
    items: [
      {
        id: 30,
        name: 'Speaker 1',
        imageUrl: 'https://images.pexels.com/photos/1054554/pexels-photo-1054554.jpeg?cs=srgb&dl=close-up-focus-gadget-1054554.jpg&fm=jpg',
        price: 176
      },
      {
        id: 31,
        name: 'Speaker 2',
        imageUrl: 'https://images.pexels.com/photos/1054554/pexels-photo-1054554.jpeg?cs=srgb&dl=close-up-focus-gadget-1054554.jpg&fm=jpg',
        price: 165
      },
      {
        id: 32,
        name: 'Speaker 3',
        imageUrl: 'https://images.pexels.com/photos/1054554/pexels-photo-1054554.jpeg?cs=srgb&dl=close-up-focus-gadget-1054554.jpg&fm=jpg',
        price: 298
      },
      {
        id: 33,
        name: 'Speaker 4',
        imageUrl: 'https://images.pexels.com/photos/1054554/pexels-photo-1054554.jpeg?cs=srgb&dl=close-up-focus-gadget-1054554.jpg&fm=jpg',
        price: 276
      },
      {
        id: 34,
        name: 'Speaker 5',
        imageUrl: 'https://images.pexels.com/photos/1054554/pexels-photo-1054554.jpeg?cs=srgb&dl=close-up-focus-gadget-1054554.jpg&fm=jpg',
        price: 154
      },
      {
        id: 35,
        name: 'Speaker 6',
        imageUrl: 'https://images.pexels.com/photos/1054554/pexels-photo-1054554.jpeg?cs=srgb&dl=close-up-focus-gadget-1054554.jpg&fm=jpg',
        price: 87
      }
    ]
  }
];

export default SHOP_DATA;