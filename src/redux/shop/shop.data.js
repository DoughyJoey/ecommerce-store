const SHOP_DATA = {
  security: {
    id: 1,
    title: 'Security',
    routeName: 'security',
    items: [
      {
        id: 1,
        name: 'Arlo 4k',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 190
      },
      {
        id: 2,
        name: 'Arlo Pro',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 240
      },
      {
        id: 3,
        name: 'TP-Link 4',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 400
      },
      {
        id: 4,
        name: 'Neos Smart Cam',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 350
      },
      {
        id: 5,
        name: 'D-Link 2',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 280
      },
      {
        id: 6,
        name: 'Swann Cam',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 170
      },
      {
        id: 7,
        name: 'Reo Link',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 130
      },
      {
        id: 8,
        name: 'Amcrest',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 80
      },
      {
        id: 9,
        name: 'Arlo 6',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 75
      }
    ]
  },
  lighting: {
    id: 2,
    title: 'Lighting',
    routeName: 'lighting',
    items: [
      {
        id: 10,
        name: 'Sengled Smart',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 55
      },
      {
        id: 11,
        name: 'Yeelight',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 80
      },
      {
        id: 12,
        name: 'Eufy',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 30
      },
      {
        id: 13,
        name: 'Philips Hue White',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 170
      },
      {
        id: 14,
        name: 'Philips Hue Color',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 80
      },
      {
        id: 15,
        name: 'Ring Smart',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 60
      },
      {
        id: 16,
        name: 'Credd Smart',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
      },
      {
        id: 17,
        name: 'Zink Smart',
        imageUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 175
      }
    ]
  },
  thermostat: {
    id: 3,
    title: 'Thermostat',
    routeName: 'thermostat',
    items: [
      {
        id: 18,
        name: 'Ecobee 3',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/QubyDisplay_Home_withbackground.png',
        price: 177
      },
      {
        id: 19,
        name: 'Ecobee 1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/QubyDisplay_Home_withbackground.png',
        price: 140
      },
      {
        id: 20,
        name: 'Honeywell 14',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/QubyDisplay_Home_withbackground.png',
        price: 200
      },
      {
        id: 21,
        name: 'Nest 5',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/QubyDisplay_Home_withbackground.png',
        price: 250
      },
      {
        id: 22,
        name: 'Hive 16',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/QubyDisplay_Home_withbackground.png',
        price: 420
      }
    ]
  },
  speaker: {
    id: 4,
    title: 'Speaker',
    routeName: 'speaker',
    items: [
      {
        id: 23,
        name: 'Echo 3',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 55
      },
      {
        id: 24,
        name: 'Echo 6',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 178
      },
      {
        id: 25,
        name: 'Google Home 2',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 300
      },
      {
        id: 26,
        name: 'Sonos One',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 150
      },
      {
        id: 27,
        name: 'JBL Link 10',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 80
      },
      {
        id: 28,
        name: 'Apple HomePod',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 255
      },
      {
        id: 29,
        name: 'Google Nest',
        imageUrl: 'https://images.pexels.com/photos/1666313/pexels-photo-1666313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 370
      }
    ]
  },
  vacuum: {
    id: 5,
    title: 'Vacuum',
    routeName: 'vacuum',
    items: [
      {
        id: 30,
        name: 'Roomba 10',
        imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
        price: 179
      },
      {
        id: 31,
        name: 'Roomba 4',
        imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
        price: 300
      },
      {
        id: 32,
        name: 'Amarey 2',
        imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
        price: 400
      },
      {
        id: 33,
        name: 'Neato 4',
        imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
        price: 390
      },
      {
        id: 34,
        name: 'Eufy 10',
        imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
        price: 450
      },
      {
        id: 35,
        name: 'iLife 2',
        imageUrl: 'https://live.staticflickr.com/3641/5827633935_12b70cf3d1_b.jpg',
        price: 500
      }
    ]
  }
};

export default SHOP_DATA;