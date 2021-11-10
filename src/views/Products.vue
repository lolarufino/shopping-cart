<template>
  <transition name="fade" mode="out-in" appear>
    <div class="products-container">
      <div v-for="product in products" class="product">
        <Product :product="product"></Product>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Product from "../components/Product.vue";

export default defineComponent({
  name: "Products",
  components: {
    Product,
  },
  computed: {
    ...mapState(["products"]),
  },
});
</script>

<style scoped lang="scss">
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