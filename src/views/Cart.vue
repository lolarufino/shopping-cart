<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="productsInCart.length > 0" class="cart-container">
      <div v-for="product in productsInCart" class="product">
        <ProductInCart :product="product"></ProductInCart>
      </div>
      <p class="total">
        Total: <span class="product-price">{{ updateFinalPrice() }} €</span>
      </p>
    </div>
    <div v-else class="cart-container">
      <p>Your cart is empty</p>
      <router-link to="/products">
        <button class="button">Start shopping now!</button>
      </router-link>
      <img
        class="empty-image"
        src="https://i.ibb.co/y0Krbtw/Card-Reader.png"
        alt="Empty cart"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import ProductInCart from "../components/ProductInCart.vue";

export default defineComponent({
  name: "Cart",
  components: {
    ProductInCart,
  },
  computed: {
    ...mapState(["productsInCart"]),
  },
  methods: {
    updateFinalPrice() {
      return this.productsInCart.reduce(
        (acc: number, { price, amount }: { price: number; amount: number }) => {
          return acc + price * amount;
        },
        0
      );
    },
  },
});
</script>


<style scoped lang="scss">
@import "../styles/variables";
.cart-container {
  font-family: $bodyfont;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: gray;
  background-color: lightgray;
  min-height: 70vh;
  margin-top: 20px;
  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    background-color: white;
    border-radius: 35px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .total {
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 60px;
    .product-price {
      margin-left: 10px;
      color: white;
      font-family: $titlefont;
      text-shadow: 1px 1px 3px lightgray;
    }
  }
  .empty-image {
    width: 30vw;
  }
  .button {
    font-family: $titlefont;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 20px;
    border: none;
    color: white;
    background-color: $maincolor;
    border-radius: 10px;
    text-shadow: 1px 1px 1px lightgray;
    transition: all 300ms ease-in-out;
    &:hover {
      background-color: $secondarycolor;
    }
  }
}
@media screen and (min-width: 900px) {
  .cart-container {
    .product {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>