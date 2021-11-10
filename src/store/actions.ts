import { ActionContext } from "vuex";
import { useToast } from "vue-toastification";
import { State, Product } from "../types/interfaces";

const toast = useToast();

const actions = {
  addProductToCart({ commit }: ActionContext<State, State>, product: Product) {
    toast.success("Product added to cart!");
    commit("updateCart", product);
  },
  incrementAmount({ commit }: ActionContext<State, State>, product: Product) {
    commit("incrementProductAmount", product);
  },
  decrementAmount({ commit }: ActionContext<State, State>, product: Product) {
    commit("decrementProductAmount", product);
  },
  deleteProductFromCart({ commit }: ActionContext<State, State>, product: Product) {
    commit("deleteProduct", product);
  },
};

export default actions;
