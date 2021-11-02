import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      {
        id: 1,
        image: 'https://i.ibb.co/wd29wF4/pexels-leah-kelley-341514.jpg',
        name: 'Lavanda tea',
        price: 5
      },
      {
        id: 2,
        image: 'https://i.ibb.co/gtbTmnV/pexels-charlotte-may-5946679.jpg',
        name: 'Green tea',
        price: 3
      },
      {
        id: 3,
        image: 'https://i.ibb.co/yVkt77n/pexels-eva-elijas-8059289.jpg',
        name: 'Chinese tea',
        price: 6
      },
      {
        id: 4,
        image: 'https://i.ibb.co/QkRnRs3/pexels-freestocksorg-370018.jpg',
        name: 'Black tea',
        price: 3
      },
      {
        id: 5,
        image: 'https://i.ibb.co/fnMGxK5/pexels-teona-swift-6913383.jpg',
        name: 'Chamomile tea',
        price: 3
      },
      {
        id: 6,
        image: 'https://i.ibb.co/YfNnGsL/pexels-charlotte-may-5946678.jpg',
        name: 'Lemon tea',
        price: 3
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
