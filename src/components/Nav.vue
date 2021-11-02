<template>
  <nav class="nav-wrapper">
    <router-link to="/">
      <h1 class="logo-text">
        Tea
        <font-awesome-icon class="logo-fa" :icon="['fas', 'mug-hot']" /> Shop
      </h1>
    </router-link>
    <div class="container">
      <router-link to="/products">
        <div class="icon-container">
          <font-awesome-icon class="logo-fa" :icon="['fas', 'list']" />
          <p class="text">Products</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="icon-container">
          <font-awesome-icon
            class="logo-fa"
            :icon="['fas', 'shopping-basket']"
          />
          <p class="text">Cart</p>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav",
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px dotted $terciarycolor;
  background-color: #eee;
  .logo-text {
    color: $maincolor;
    font-family: $titlefont;
    font-size: 36px;
    .logo-fa {
      color: $terciarycolor;
    }
  }
  .container {
    display: flex;

    .icon-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .logo-fa {
        color: $maincolor;
      }
      .text {
        font-family: $bodyfont;
        font-size: 20px;
        margin-left: 10px;
        margin-right: 30px;
        color: black;
      }
    }
  }
}
</style>
