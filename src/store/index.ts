import { createStore } from 'vuex';

export default createStore<State>({
  state: {
    products: [
      {
        id: 1,
        image: 'https://i.ibb.co/wd29wF4/pexels-leah-kelley-341514.jpg',
        name: 'Lavanda tea',
        price: 5,
        amount: 1
      },
      {
        id: 2,
        image: 'https://i.ibb.co/gtbTmnV/pexels-charlotte-may-5946679.jpg',
        name: 'Green tea',
        price: 3,
        amount: 1
      },
      {
        id: 3,
        image: 'https://i.ibb.co/yVkt77n/pexels-eva-elijas-8059289.jpg',
        name: 'Chinese tea',
        price: 6,
        amount: 1
      },
      {
        id: 4,
        image: 'https://i.ibb.co/QkRnRs3/pexels-freestocksorg-370018.jpg',
        name: 'Black tea',
        price: 3,
        amount: 1
      },
      {
        id: 5,
        image: 'https://i.ibb.co/fnMGxK5/pexels-teona-swift-6913383.jpg',
        name: 'Chamomile tea',
        price: 3,
        amount: 1
      },
      {
        id: 6,
        image: 'https://i.ibb.co/YfNnGsL/pexels-charlotte-may-5946678.jpg',
        name: 'Lemon tea',
        price: 3,
        amount: 1
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
      state.productsInCart.filter((product: any) => product === payload ? product.amount++ : null)
    },
    decrementProductAmount(state,payload){
      state.productsInCart.filter((product: any) => product === payload && payload.amount > 0 ? product.amount-- : null)
    },
    updateValue(state, payload){
      state.productsInCart.filter((product: any) => product === payload.product && payload.amount > 0 ? product.amount = payload.value : null)
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
    updateValue({commit},{value, product}: {value: number, product: object}){
      const data = {value, product}
      commit("updateProductAmount",data)
    }
  },
  modules: {
  },
});


export interface State {
  products: Array<object>
  productsInCart: Array<object>
}
