<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ProductInCart",
  props: ["product"],
  methods: {
    ...mapActions(["addProductToCart"]),
  },
});
</script>


<style scoped lang="scss">
@import "../styles/variables.scss";
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
</style>