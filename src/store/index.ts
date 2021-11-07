import { createStore } from 'vuex';
import { useToast } from 'vue-toastification';

const toast = useToast()

export default createStore<State>({
  state: {
    products: [
      {
        id: 1,
        image: 'https://i.ibb.co/PFKMSLV/Watch.png',
        name: 'AppleWatch',
        price: 450,
        amount: 1,
        stock: 5
      },
      {
        id: 2,
        image: 'https://i.ibb.co/s5HmDvj/HDD.png',
        name: 'HDD',
        price: 50,
        amount: 1,
        stock: 15
      },
      {
        id: 3,
        image: 'https://i.ibb.co/Cm90JRn/Headphones.png',
        name: 'Headphones',
        price: 40,
        amount: 1,
        stock: 5
      },
      {
        id: 4,
        image: 'https://i.ibb.co/crRjK4q/iPhone.png',
        name: 'iPhone',
        price: 1200,
        amount: 1,
        stock: 7
      },
      {
        id: 5,
        image: 'https://i.ibb.co/Wzssb0C/MacBook.png',
        name: 'MacBook',
        price: 2100,
        amount: 1,
        stock: 8
      },
      {
        id: 6,
        image: 'https://i.ibb.co/51b3yk5/Speaker.png',
        name: 'Speaker',
        price: 50,
        amount: 1,
        stock: 13
      },
      {
        id: 7,
        image: 'https://i.ibb.co/GH1gtKh/VR-Control.png',
        name: 'VR Control',
        price: 85,
        amount: 1,
        stock: 10
      },
      {
        id: 8,
        image: 'https://i.ibb.co/qByXxvh/Camera.png',
        name: 'Camera',
        price: 450,
        amount: 1,
        stock: 10
      }
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
      toast.success("Product added to cart!");
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
