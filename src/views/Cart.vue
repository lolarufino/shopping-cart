<template>
  <transition name="fade" mode="out-in" appear>
    <div class="cart-container">
      <div v-for="product in productsInCart" class="product">
        <img class="product-image" :src="product.image" :alt="product.id" />
        <p class="product-name">{{ product.name }}</p>
        <span>{{ product.price }}€/100g</span>
        <div class="amount">
          <p>
            Quantity:
            <font-awesome-icon
              class="product-addtocart"
              :icon="['fas', 'plus']"
              @click="incrementAmount(product)"
            />
            <input
              type="text"
              pattern="\d+"
              class="input"
              :value="
                product.amount === 0
                  ? deleteProductFromCart(product)
                  : product.amount
              "
              @input="product.amount = $event.target.value"
              min="0"
              :max="product.stock"
            />
            <font-awesome-icon
              class="product-addtocart"
              :icon="['fas', 'minus']"
              @click="decrementAmount(product)"
            />
          </p>
        </div>
        <font-awesome-icon
          class="product-delete"
          :icon="['fas', 'trash-alt']"
          @click="deleteProductFromCart(product)"
        />
      </div>
      <p>Total: {{ updateFinalPrice() }} €</p>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Cart",
  computed: {
    ...mapState(["productsInCart"]),
  },
  methods: {
    ...mapActions([
      "incrementAmount",
      "decrementAmount",
      "updateValue",
      "deleteProductFromCart",
    ]),
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


<style lang="scss">
@import "../styles/variables";
.cart-container {
  height: 70vh;
  font-family: $bodyfont;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    .product-image {
      width: 150px;
    }
    .product-name {
    }
    .amount {
      display: flex;
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