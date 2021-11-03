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
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px dotted $terciarycolor;
  background-color: #eee;
  .logo-text {
    color: $maincolor;
    font-family: $titlefont;
    font-size: 36px;
    text-align: center;
    &:hover > .logo-fa {
      transition: all 300ms ease-in-out;
      color: $secondarycolor;
    }
    .logo-fa {
      transition: all 300ms ease-in-out;
      color: $terciarycolor;
    }
  }
  .container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .icon-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      transition: all 300ms ease-in-out;
      &:hover > .logo-fa {
        color: $secondarycolor;
      }
      .logo-fa {
        transition: all 300ms ease-in-out;
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
@media screen and (min-width: 480px) {
  .nav-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .container {
      margin-top: 0;
    }
  }
}
</style>
