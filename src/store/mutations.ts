import {State, Product} from '../types/interfaces';

const mutations = {
    updateCart(state: State, payload: Product){
      if(state.productsInCart.includes(payload)){
        payload.amount++
      }else{
        state.productsInCart = [ ...state.productsInCart, payload ]
      }
    },
    incrementProductAmount(state: State,payload: Product){
      state.productsInCart.filter((product: any) => product === payload && payload.amount < product.stock ? product.amount++ : null)
    },
    decrementProductAmount(state: State,payload: Product){
      state.productsInCart.filter((product: any) => product === payload && payload.amount >= 1 ? product.amount-- : null)
    },
    deleteProduct(state: State, payload: Product){
      state.productsInCart = state.productsInCart.filter((product: any) => product.id !== payload.id)
    }
  }

export default mutations;