<template>
  <transition name="fade" mode="out-in" appear>
    <div class="products-container">
      <div v-for="product in products" class="product">
        <img class="product-image" :src="product.image" :alt="product.id" />
        <div class="footer-product">
          <div class="footer-text">
            <p class="product-name">{{ product.name }}</p>
            <span class="product-price">{{ product.price }} €</span>
          </div>
          <font-awesome-icon
            class="product-addtocart"
            :icon="['fas', 'shopping-cart']"
            @click="this.addProductToCart(product)"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Products",
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["addProductToCart"]),
  },
});
</script>

<style lang="scss">
@import "../styles/variables.scss";
.products-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: lightgray;
  color: gray;
  .product {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $bodyfont;
    font-size: 20px;
    margin: 50px 95px 50px 95px;
    background-color: white;
    padding-bottom: 20px;
    border-radius: 35px;
    .product-image {
      width: 400px;
      margin-bottom: 10px;
      border-radius: 55px 55px 0 0;
    }
    .footer-product {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
      .footer-text {
        display: flex;
        flex-direction: column;
        .product-name {
          margin-bottom: 10px;
        }
        .product-price {
          margin-bottom: 10px;
          color: $maincolor;
          font-weight: bold;
        }
      }
      .product-addtocart {
        cursor: pointer;
        color: $maincolor;
        font-size: 35px;
        transition: all 300ms ease-in-out;
        &:hover {
          color: $secondarycolor;
          transform: scale(1.2);
        }
      }
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
</style>