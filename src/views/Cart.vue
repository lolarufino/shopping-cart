<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="productsInCart.length > 0" class="cart-container">
      <div v-for="product in productsInCart" class="product">
        <img class="product-image" :src="product.image" :alt="product.id" />
        <p>{{ product.name }}</p>
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
      </div>
      <p class="product">
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
  color: gray;
  .product {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    background-color: white;
    border-radius: 35px;
    padding: 20px;
    .product-image {
      width: 150px;
    }
    .product-price {
      font-family: $titlefont;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>