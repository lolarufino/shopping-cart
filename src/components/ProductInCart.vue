<template>
  <img class="product-image" :src="product.image" :alt="product.id" />
  <p class="product-name">{{ product.name }}</p>
  <span class="product-price">{{ product.price }}€</span>
  <div class="amount">
    <p>
      Quantity:
      <font-awesome-icon
        class="product-addtocart"
        :icon="['fas', 'minus']"
        @click="decrementAmount(product)"
      />
      <input
        type="number"
        pattern="\d+"
        class="input"
        :value="
          product.amount === 0 ? deleteProductFromCart(product) : product.amount
        "
        @input="product.amount = $event.target.value"
        min="0"
        :max="product.stock"
      />
      <font-awesome-icon
        class="product-addtocart"
        :icon="['fas', 'plus']"
        @click="incrementAmount(product)"
      />
    </p>
  </div>
  <font-awesome-icon
    class="product-delete"
    :icon="['fas', 'trash-alt']"
    @click="deleteProductFromCart(product)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ProductInCart",
  props: ["product"],
  methods: {
    ...mapActions([
      "incrementAmount",
      "decrementAmount",
      "updateValue",
      "deleteProductFromCart",
    ]),
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables";
.product-image {
  width: 150px;
  margin-bottom: 20px;
}
.product-name {
  margin-bottom: 20px;
}
.product-price {
  font-family: $titlefont;
  margin-bottom: 20px;
}
.amount {
  display: flex;
  margin-bottom: 20px;
  .product-addtocart {
    cursor: pointer;
    color: $terciarycolor;
    font-size: 20px;
    transition: all 300ms ease-in-out;
    margin-right: 5px;
    margin-left: 5px;
    &:hover {
      color: $secondarycolor;
      transform: scale(1.2);
    }
  }
  .input {
    padding: 10px;
    width: 50px;
    border: 1px solid lightgray;
    text-align: center;
  }
}
.product-delete {
  color: $maincolor;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
}
@media screen and (min-width: 900px) {
  .product-image {
    margin-bottom: 0;
  }
  .product-name {
    margin-bottom: 0;
  }
  .product-price {
    margin-bottom: 0;
  }
  .amount {
    margin-bottom: 0;
  }
}
</style>