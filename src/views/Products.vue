<template>
  <div class="products-container">
    <div v-for="product in products" class="product">
      <img class="product-image" :src="product.image" :alt="product.id" />
      <p class="product-name">{{ product.name }}</p>
      <span class="product-price">{{ product.price }} €/100g</span>
      <font-awesome-icon
        class="product-addtocart"
        :icon="['fas', 'shopping-cart']"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Products",
  computed: {
    ...mapState(["products"]),
  },
});
</script>

<style lang="scss">
@import "../styles/variables.scss";
.products-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $bodyfont;
    font-size: 20px;
    margin: 30px;
    .product-image {
      width: 350px;
    }
    .product-name {
    }
    .product-price {
    }
    .product-addtocart {
      color: $terciarycolor;
    }
  }
}
</style>