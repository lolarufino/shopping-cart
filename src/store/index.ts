import { createStore } from 'vuex';

export default createStore<State>({
  state: {
    products: [
      {
        id: 1,
        image: 'https://i.ibb.co/wd29wF4/pexels-leah-kelley-341514.jpg',
        name: 'Lavanda tea',
        price: 5,
        amount: 1,
        stock: 10
      },
      {
        id: 2,
        image: 'https://i.ibb.co/gtbTmnV/pexels-charlotte-may-5946679.jpg',
        name: 'Green tea',
        price: 3,
        amount: 1,
        stock: 15
      },
      {
        id: 3,
        image: 'https://i.ibb.co/yVkt77n/pexels-eva-elijas-8059289.jpg',
        name: 'Chinese tea',
        price: 6,
        amount: 1,
        stock: 5
      },
      {
        id: 4,
        image: 'https://i.ibb.co/QkRnRs3/pexels-freestocksorg-370018.jpg',
        name: 'Black tea',
        price: 3,
        amount: 1,
        stock: 7
      },
      {
        id: 5,
        image: 'https://i.ibb.co/fnMGxK5/pexels-teona-swift-6913383.jpg',
        name: 'Chamomile tea',
        price: 3,
        amount: 1,
        stock: 8
      },
      {
        id: 6,
        image: 'https://i.ibb.co/YfNnGsL/pexels-charlotte-may-5946678.jpg',
        name: 'Lemon tea',
        price: 3,
        amount: 1,
        stock: 13
      },
    ],
    productsInCart: []
  },
  mutations: {
    updateCart(state, payload){
      if(state.productsInCart.includes(payload)){
        payload.amount++
      }else{
        state.productsInCart.push(payload);
      }
    },
    incrementProductAmount(state,payload){
      state.productsInCart.filter((product: any) => product === payload && payload.amount < product.stock ? product.amount++ : null)
    },
    decrementProductAmount(state,payload){
      state.productsInCart.filter((product: any) => product === payload && payload.amount >= 1 ? product.amount-- : null)
    },
    deleteProduct(state, payload){
      state.productsInCart = state.productsInCart.filter((product: any) => product.id !== payload.id)
    }
  },
  actions: {
    addProductToCart({commit},product: object){
      commit ("updateCart", product)
    },
    incrementAmount({commit},product: object){
      commit ("incrementProductAmount", product)
    },
    decrementAmount({commit},product: object){
      commit ("decrementProductAmount", product)
    },
    deleteProductFromCart({commit}, product:any){
      commit("deleteProduct", product)
    }
  },
  modules: {
  },
});


export interface State {
  products: Array<object>
  productsInCart: Array<object>
}
